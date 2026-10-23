import { Link } from "react-router";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <header className="navbar">
        <div className="navbar-brand">Ye Oldin Emporium</div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Marketplace</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="home-main">
        <section className="hero">
          <img
            src="https://placehold.co/1600x700/1a1207/c9a227?text=Forge+Your+Legend"
            alt="Medieval marketplace banner"
            className="hero-image"
          />
          <div className="hero-overlay">
            <h1>Forge Your Legend</h1>
            <p>Weapons, armor, and potions fit for the boldest adventurers.</p>
            <Link to="/products" className="hero-cta">
              Enter the Marketplace
            </Link>
          </div>
        </section>

        <section className="categories">
          <h2>Choose Your Path</h2>
          <div className="category-grid">
            <Link to="/products/weapon" className="category-card">
              <span className="category-icon">⚔</span>
              <h3>Weapons</h3>
              <p>Blades, axes, and bows forged for battle.</p>
            </Link>
            <Link to="/products/armor" className="category-card">
              <span className="category-icon">🛡</span>
              <h3>Armor</h3>
              <p>Plate, mail, and leather to turn back any blow.</p>
            </Link>
            <Link to="/products/potion" className="category-card">
              <span className="category-icon">🧪</span>
              <h3>Potions</h3>
              <p>Elixirs to heal, empower, or turn the tide.</p>
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Ye Oldin Emporium — trusted across
          all Nine Realms.
        </p>
      </footer>
    </div>
  );
}
export default Home;
