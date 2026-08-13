import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usersData from "./Users.json";
function Login() {
 const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  

  const handleLogin = (e) => {
    e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || usersData;
const user = users.find(
  (user) =>
    user.username === username && user.password === password
);
    if(user) {
      localStorage.setItem("loggedInUser", user.username);
      navigate("/products");
    } else {
      setMessage("Invalid username or password.");
    } 
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        {message && <p>{message}</p>}

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;