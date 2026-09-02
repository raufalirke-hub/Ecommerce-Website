import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

export default function Login() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginId.trim() === "" || password.trim() === "") {
      alert("Please fill all fields");
      return;
    }
    // yahan email ya username dono se login hoga
    localStorage.setItem("loggedInUser", loginId);
    navigate("/products");
  };

  return (
    <div className="login-page-new">
      <div className="login-left">
        <img src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=800" alt="fashion" />
        <div className="login-left-text">
          <h3>Your Style, Your Story.</h3>
          <p>Whether you're dreaming of chic styles, trending fits, or timeless essentials, your fashion journey starts here.</p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-box">
          <span className="login-welcome-badge">WELCOME BACK</span>
          <h1>Welcome to ShopEase! 👋</h1>
          <p className="login-sub">Good to see you again. Login to continue exploring and your dream outfit is just a click away!</p>

          <form onSubmit={handleLogin}>
            <label>Username or Email</label>
            <input 
              type="text" 
              placeholder="Enter your username or email" 
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              required 
            />

            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />

            <div className="login-options">
              <span>New to ShopEase? <Link to="/register">Create an Account</Link></span>
              <Link to="#">Forgot password?</Link>
            </div>

            <button type="submit" className="login-main-btn">Login - Continue Exploring and Shopping</button>
          </form>

          <p className="login-secure">🔒 Secure login with username/email only</p>
        </div>
      </div>
    </div>
  );
} 