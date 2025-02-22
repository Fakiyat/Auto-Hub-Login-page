import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get the token from localStorage
    const token = localStorage.getItem("accessToken");

    if (!token) {
      navigate("/login"); // Redirect to login if not logged in
    } else {
      // Fetch user details (If stored in localStorage)
      const storedUser = JSON.parse(localStorage.getItem("user")) || {
        name: "Guest",
      };
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="home-container">
      <header className="navbar">
        <h1>Welcome to Auto Hub 🚗</h1>
        <div className="user-info">
          <span>Welcome, {user?.name}</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </header>
      <main className="content">
        <p>Find the best cars and deals in town!</p>
      </main>
      <footer className="footer-home">
        <p>© 2025 Auto Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
