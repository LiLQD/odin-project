const BASE_URL = "https://www.dnd5eapi.co/api/2014";
export async function getEquipmentCategory(category, signal) {
  const res = await fetch(`${BASE_URL}/equipment-categories/${category}`, {
    signal,
  });
  if (!res.ok) throw new Error(`Failed to load category: ${category}`);
  return res.json();
}
export async function getEquipmentDetail(relativeUrl, signal) {
  const res = await fetch(`https://www.dnd5eapi.co${relativeUrl}`, {
    signal,
  });
  if (!res.ok) throw new Error(`Failed to load item: ${relativeUrl}`);
  return res.json();
}
