import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style/Logout.css";

const Logout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) navigate("/login");
    const storedUser = JSON.parse(localStorage.getItem("user")) || {
      name: "Guest",
    };
    setUser(storedUser);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="user-info">
      <span>Welcome, {user?.name}</span>
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default Logout;
