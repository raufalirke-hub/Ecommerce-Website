import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
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
import About from "./About.jsx" 
import Terms from "./Terms.jsx" 

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
      <Link to="/" className="logo">ShopEase</Link>
      <div className="search-box">
        <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { handleSearch(); } }} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/terms">Terms of Use</Link></li>
        <li><Link to="/cart">Cart ({cartCount})</Link></li>
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
  const navigate = useNavigate();
  const categories = [
    { filter: "women", label: "Women", img: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=600" },
    { filter: "men", label: "Men", img: "https://images.unsplash.com/photo-1488167463355-e4a877a67d35?q=80&w=600" },
    { filter: "footwear", label: "Shoes", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80" },
    { filter: "accessories", label: "Accessories", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600" },
  ];

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-tag">NEW COLLECTION 2026</span>
          <h1>Cool Fashion<br/>Styles for Every<br/><span style={{color:'#ff3b30'}}>Occasion</span></h1>
          <p>Explore the latest products.</p>
          <div className="hero-actions">
            <Link to="/products" className="hero-btn">Shop Now</Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img className="hero-image" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600" alt="fashion" />
        </div>
      </section>

      <div className="section">
        <div className="section-heading">
          <h2>Shop by Category</h2>
        </div>
        <div className="categories-grid">
          {categories.map((cat) => (
            <div key={cat.label} className="category-card" onClick={() => navigate(`/products?category=${cat.filter}`)} style={{cursor:"pointer"}}>
              <img src={cat.img} alt={cat.label}/>
              <div className="category-overlay"><h3>{cat.label}</h3><span>View Products</span></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
} 

function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="product-card">
      <Link to={"/product/" + product.id}><img src={product.image} alt={product.name} /></Link>
      <h3>{product.name}</h3><p>{product.description}</p><span className="price">{product.price}</span>
      <button className="buy-btn" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";

  const filteredProducts = products.filter((p) => {
    const name = p.name.toLowerCase();
    const desc = p.description.toLowerCase();
    const cat = category.toLowerCase();
    const pCat = p.category.toLowerCase();

    let matchesCategory = true;
    if (cat === "women") {
      matchesCategory = name.includes("dress") || name.includes("kurti") || name.includes("women") || desc.includes("women");
    } else if (cat === "men") {
      matchesCategory = (pCat === "clothing" && !name.includes("dress") && !name.includes("kurti") && !name.includes("women"));
    } else if (cat === "footwear" || cat === "shoes") {
      matchesCategory = pCat === "footwear";
    } else if (cat === "accessories" || cat === "bags") {
      matchesCategory = pCat === "bags" || pCat === "beauty" || pCat === "home";
    } else if (cat) { 
      matchesCategory = pCat.includes(cat) || name.includes(cat);
    }

    const matchesSearch = name.includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentProducts = filteredProducts.slice(0, 20);

  return (
    <section className="products-page">
      <h1>All Products {category && `- ${category}`}</h1>
      <p className="products-subtitle">Showing {filteredProducts.length} products</p>
      <div className="products-grid">
        {currentProducts.length > 0 ? currentProducts.map((product) => <ProductCard key={product.id} product={product} />) : <p>No products found.</p>}
      </div>
    </section>
  );
}

function ProtectedRoute({ children }) { const isLoggedIn = localStorage.getItem("loggedInUser"); if (!isLoggedIn) { return <Login />; } return children; }

function App() {
  return (
    <BrowserRouter><Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} /> 
      </Routes><Footer />
    </BrowserRouter>
  );
}
export default App; 