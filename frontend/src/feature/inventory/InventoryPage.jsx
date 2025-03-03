import React, { useState } from "react";
import Navbar from "../Navbar-Inventory/Navbar";
import Tabs from "../Tabs/Tabs";
import VehicleTable from "../Tabs/VehicleTable";
import Logout from "../Logout/Logout";

function InventoryPage() {
  const [activeTab, setActiveTab] = useState("All"); // putting All there will by default have pressed the All ta button
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      name: "Tayota",
      model: "2021",
      price: "100000",
      status: "In Stock",
      img: "/Tayota.avif",
    },
    {
      id: 2,
      name: "MINI Convertible",
      model: "2020",
      price: "10000",
      status: "In Stock",
      img: "/cooper.webp",
    },
    {
      id: 3,
      name: "Jaguar X4",
      model: "2021",
      price: "1000000",
      status: "In Stock",
      img: "/Jaguar.webp",
    },
    {
      id: 4,
      name: "Mercedes-Benz A Class",
      model: "2021",
      price: "1000000",
      status: "In Stock",
      img: "/Mercedes-Benz.webp",
    },
    {
      id: 5,
      name: "Audi A5",
      model: "2021",
      price: "1000000",
      status: "Reserved",
      img: "/Audi q7.webp",
    },
    {
      id: 6,
      name: "Audi A4",
      model: "2021",
      price: "1000000",
      status: "Reserved",
      img: "/audi-A4.webp",
    },
    {
      id: 7,
      name: "Audi Q7",
      model: "2021",
      price: "1000000",
      status: "Reserved",
      img: "/Audi q7.webp",
    },
    {
      id: 8,
      name: "Land Rover Range Rove",
      model: "2021",
      price: "1000000",
      status: "Advertising",
      img: "/land rover.webp",
    },
    {
      id: 9,
      name: " Range Rove",
      model: "2021",
      price: "1000000",
      status: "Advertising",
      img: "/",
    },
    {
      id: 10,
      name: "Maruati Suzuki",
      model: "2021",
      price: "1000000",
      status: "For Sale",
      img: "",
    },
    {
      id: 11,
      name: "Maruati Suzuki Alto 800",
      model: "2021",
      price: "1000000",
      status: "For Sale",
      img: "",
    },
    {
      id: 12,
      name: "Baleno",
      model: "2021",
      price: "1000000",
      status: "For Sale",
      img: "",
    },
  ]);
  return (
    <div className="inventory-container">
      <nav className="navbar">
        <Navbar />
        <Logout />
      </nav>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* activeTab - Tells Tabs which tab is currently selected (so Tabs can highlight the active tab).*/}
      {/*setActiveTab - Allows the Tabs component to change the active tab when you click a button.*/}
      {/* Pass vehicles and setVehicles to VehicleTable */}
      <VehicleTable
        activeTab={activeTab}
        vehicles={vehicles}
        setVehicles={setVehicles}
      />
      {/*VehicleTable only shows vehicles that match activeTab.*/}
      <footer className="footer-home">
        <p>© 2025 Auto Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default InventoryPage;
