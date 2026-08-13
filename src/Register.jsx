import { useState } from "react";
import { Link } from "react-router-dom";
import usersData from "./Users.json";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage("Please enter username and password.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) => user.username === username
    );

    if (existingUser) {
      setMessage("Username already exists.");
      return;
    }

    const newUser = {
      id: users.length + 1,
      username: username,
      password: password,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    setMessage("Registration successful!");

    setUsername("");
    setPassword("");
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1>Register</h1>

        <form onSubmit={handleRegister}>
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

          <button type="submit">Register</button>
        </form>

        {message && <p>{message}</p>}

        <p>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;