import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { useCart } from "./CartContext.jsx";

import products from "./data.json";
import Login from "./Login";
import Register from "./Register";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Admin from "./Admin";

function Navbar() {
  const [search, setSearch] = useState("");
  const { cartCount } = useCart();
  const navigate = useNavigate();

  function handleSearch() {
    if (search.trim() !== "") {
      navigate("/products?search=" + search);
    }
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        ShopEase
      </Link>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/register">Register</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/terms">Terms of Use</Link>
        </li>

        <li>
          <Link to="/cart">Cart ({cartCount})</Link>
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
  const categories = [
    {
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Beauty",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const brands = ["Apple", "Samsung", "Nike", "Adidas", "Puma", "Sony"];

  return (
    <>
      {/* HERO SECTION */}

      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-tag">NEW COLLECTION 2026</span>

          <h1>
            Discover Products You
            <span> Will Love</span>
          </h1>

          <p>
            Explore the latest products, trending styles and everyday
            essentials all in one place.
          </p>

          <div className="hero-actions">
            <Link to="/products" className="hero-btn">
              Shop Now
            </Link>

            <Link to="/about" className="hero-link">
              Explore More →
            </Link>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
            alt="Shopping collection"
          />
        </div>
      </section>

      {/* CATEGORIES */}

      <section className="section categories-section">
        <div className="section-heading">
          <div>
            <span>EXPLORE</span>
            <h2>Shop by Category</h2>
          </div>

          <Link to="/products">View All →</Link>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              to="/products"
              className="category-card"
              key={category.name}
            >
              <img src={category.image} alt={category.name} />

              <div className="category-overlay">
                <h3>{category.name}</h3>
                <span>Shop Now →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}

      <section className="section featured-section">
        <div className="section-heading">
          <div>
            <span>POPULAR PRODUCTS</span>
            <h2>Featured Products</h2>
          </div>

          <Link to="/products">View All Products →</Link>
        </div>

        <div className="products-grid">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* PROMOTIONAL BANNER */}

      <section className="promo-section">
        <div className="promo-content">
          <span>LIMITED TIME OFFER</span>

          <h2>Get the Best Deals on Your Favourite Products</h2>

          <p>
            Discover great products at great prices and make your shopping
            experience easier.
          </p>

          <Link to="/products" className="hero-btn">
            Explore Deals
          </Link>
        </div>
      </section>

      {/* BRANDS */}

      <section className="section brands-section">
        <h2 className="section-title">Popular Brands</h2>

        <div className="brands-grid">
          {brands.map((brand) => (
            <div className="brand-card" key={brand}>
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}

      <section className="about-home">
        <div className="about-content">
          <span>ABOUT SHOPEASE</span>

          <h2>Shopping Made Simple</h2>

          <p>
            ShopEase brings different products together in one simple and
            convenient online shopping experience.
          </p>

          <Link to="/about" className="about-btn">
            Learn More
          </Link>
        </div>
      </section>
    </>
  );
}
function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="product-card">
      <Link to={"/product/" + product.id}>
        <img
          src={product.image}
          alt={product.name}
        />
      </Link>

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <span className="price">
        {product.price}
      </span>

      <button className="buy-btn" 
onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
function Products() {
  const { cart, addToCart } = useCart();
  const [currentPage, setCurrentPage] = useState(1);

  const searchParams = new URLSearchParams(window.location.search);
  const search = searchParams.get("search") || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const productsPerPage = 20;

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <section className="products-page">
      <h1>All Products</h1>

      <p className="products-subtitle">
        Explore our complete collection of products.
      </p>

      <div className="products-grid">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={
                currentPage === index + 1
                  ? "active-page"
                  : ""
              }
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

function About() {
  return (
    <section className="info-page">
      <h1>About Us</h1>

      <p>
        Welcome to ShopEase, a simple frontend ecommerce website created
        using React. Our goal is to provide a clean and easy shopping
        experience.
      </p>

      <h2>What We Do</h2>

      <p>
        We showcase a variety of products through a modern and responsive
        interface. This project currently uses frontend-only product data.
      </p>

      <h2>Our Mission</h2>

      <p>
        Our mission is to make online shopping simple, fast and enjoyable
        for everyone.
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
        All products displayed on this website are for demonstration
        purposes only. Product information and prices are frontend data.
      </p>

      <h2>Website Usage</h2>

      <p>
        Users should not misuse, copy, or attempt to damage the website
        or its content.
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

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />
        <Route path="/cart" element={<Cart />} /> 

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/admin" element={<Admin />} />

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