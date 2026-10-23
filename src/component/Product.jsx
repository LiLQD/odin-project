import { NavLink, Outlet } from "react-router";
import Navbar from "./Navbar";
import "../styles/Product.css";

const Product = () => {
  return (
    <div className="product-page">
      <Navbar />
      <div className="product-layout">
        <aside className="category-sidebar">
          <h3>Categories</h3>
          <NavLink to="weapon">⚔ Weapons</NavLink>
          <NavLink to="armor">🛡 Armor</NavLink>
          <NavLink to="potion">🧪 Potions</NavLink>
        </aside>
        <main className="product-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default Product;
