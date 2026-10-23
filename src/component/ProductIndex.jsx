import { Link } from "react-router";
import "../styles/shared.css";

function ProductIndex() {
  return (
    <div className="product-index">
      <h2 className="section-heading">Choose a Category</h2>
      <div className="category-grid">
        <Link to="weapon" className="category-card">
          <span className="category-icon">⚔</span>
          <h3>Weapons</h3>
        </Link>
        <Link to="armor" className="category-card">
          <span className="category-icon">🛡</span>
          <h3>Armor</h3>
        </Link>
        <Link to="potion" className="category-card">
          <span className="category-icon">🧪</span>
          <h3>Potions</h3>
        </Link>
      </div>
    </div>
  );
}
export default ProductIndex;
