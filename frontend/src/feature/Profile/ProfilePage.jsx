import React, { useState } from "react";
import Navbar from "../Navbar-Inventory/Navbar";
import ProfileTabs from "./ProfileTabs";
import "./Styles/ProfileBody.css";

const ProfilePage = () => {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Wick",
    img: "/Moon River.jpeg",
    emailAddress: "johnwick@wickstation.com",
    phoneNumber: "+91-(009)-0009",
    dateOfBirth: "20/10/2000",
    gender: "Male",
    role: "Admin",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Curabitur sodales sit amet nunc et vehicula. Mauris sed lectus nisi.",
  });

  const [activeTab, setActiveTab] = useState("personal");

  return (
    <>
      <nav className="navbar">
        <Navbar />
      </nav>

      <div className="profile-body">
        <h2 className="page-title">Account Settings</h2>
        <div className="breadcrumbs">
          Home &gt; Account Settings &gt; {activeTab}
        </div>

        {/* Tabs Component */}
        <ProfileTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          contact={contact}
        />

        {/* Edit Button (Floating at bottom-right) */}
        <div className="edit-btn-container">
          <button className="edit-btn">Edit</button>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
