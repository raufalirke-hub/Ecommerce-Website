import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import products from "./data.json";
import Login from "./Login";
import Register from "./Register";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        ShopEase
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/terms">Terms of Use</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <h3>ShopEase</h3>

      <p>Your simple and trusted online store.</p>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About Us</Link>
        <Link to="/terms">Terms of Use</Link>
      </div>

      <p>© 2026 ShopEase. All rights reserved.</p>
    </footer>
  );
}

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Everything You Need, All in One Place.</h1>

          <p>
            Discover quality products at affordable prices. Shop your
            favourites from our simple and modern online store.
          </p>

          <Link to="/products" className="hero-btn">
            Shop Now
          </Link>
        </div>

        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
          alt="Online shopping"
        />
      </section>

      <section className="section">
        <h2 className="section-title">Featured Products</h2>

        <div className="products-grid">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>Premium quality product for your everyday needs.</p>

      <span className="price">{product.price}</span>

      <button className="buy-btn">Add to Cart</button>
    </div>
  );
}

function Products() {
  return (
    <section className="section">
      <h1 className="section-title">Our Products</h1>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="info-page">
      <h1>About Us</h1>

      <p>
        Welcome to ShopEase, a simple frontend ecommerce website created using
        React. Our goal is to provide a clean and easy shopping experience.
      </p>

      <h2>What We Do</h2>

      <p>
        We showcase a variety of products through a modern and responsive
        interface. This project currently uses frontend-only product data.
      </p>

      <h2>Our Mission</h2>

      <p>
        Our mission is to make online shopping simple, fast and enjoyable for
        everyone.
      </p>
    </section>
  );
}

function Terms() {
  return (
    <section className="info-page">
      <h1>Terms of Use</h1>

      <p>
        By using this website, you agree to use the website for lawful
        purposes.
      </p>

      <h2>Products</h2>

      <p>
        All products displayed on this website are for demonstration purposes
        only. Product information and prices are frontend data.
      </p>

      <h2>Website Usage</h2>

      <p>
        Users should not misuse, copy, or attempt to damage the website or its
        content.
      </p>

      <h2>Changes</h2>

      <p>
        These terms may be updated in the future as the website develops.
      </p>
    </section>
  );
}

/* 
   This checks whether the user is logged in.
   If not logged in, user will see Login page.
*/
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("loggedInUser");

  if (!isLoggedIn) {
    return <Login />;
  }

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/terms" element={<Terms />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;