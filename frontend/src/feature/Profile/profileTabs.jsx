import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import CompanyInfo from "./CompanyInfo";
import PasswordReset from "./PasswordReset";
import "./Styles/ProfileBody.css";

const ProfileTabs = ({ contact }) => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="profile-tabs">
      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "personal" ? "active" : ""}`}
          onClick={() => setActiveTab("personal")}
        >
          Personal Information
        </button>
        <button
          className={`tab ${activeTab === "company" ? "active" : ""}`}
          onClick={() => setActiveTab("company")}
        >
          Company Information
        </button>
        <button
          className={`tab ${activeTab === "password" ? "active" : ""}`}
          onClick={() => setActiveTab("password")}
        >
          Password Reset
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "personal" && <PersonalInfo contact={contact} />}
        {activeTab === "company" && <CompanyInfo contact={contact} />}
        {activeTab === "password" && <PasswordReset />}
      </div>
    </div>
  );
};

export default ProfileTabs;
