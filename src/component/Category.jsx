import "../styles/Category.css";
import { useParams } from "react-router";
import useCategoryItems from "../hook/useCategoryItem";
import Item from "./Item";

const Category = () => {
  const { category } = useParams();
  const { items, isLoading, error } = useCategoryItems(category);
  if (isLoading) return <p>Loading {category}...</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item key={item.index} {...item} />
      ))}
    </div>
  );
};

export default Category;
