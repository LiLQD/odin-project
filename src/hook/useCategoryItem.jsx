import { useState, useEffect } from "react";
import { getEquipmentCategory, getEquipmentDetail } from "../api/dnd5e";

const useCategoryItems = (category) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) return;
    let controller = new AbortController();
    function fetchData() {
      setIsLoading(true);
      setError(null);
      getEquipmentCategory(category, controller.signal)
        .then((categoryData) =>
          Promise.all(
            categoryData.equipment.map((stub) =>
              getEquipmentDetail(stub.url, controller.signal),
            ),
          ),
        )
        .then((details) => {
          setItems(details);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") return;
          setError(err);
          setIsLoading(false);
        });
    }
    fetchData();

    return () => controller.abort;
  }, [category]);

  return { items, isLoading, error };
};

export default useCategoryItems;
