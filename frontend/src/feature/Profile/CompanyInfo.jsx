import React from "react";
import "./Styles/ProfileBody.css";

const CompanyInfo = ({ contact }) => {
  return (
    <div className="profile-body">
      {/*---------------------------- Main content section ---------------------------*/}
      <div className="profile-wrapper">
        {/* -------------------------------Profile Card Section----------------------------- */}
        <div className="profile-card">
          <div className="profile-header">
            <img
              className="profile-avatar"
              src={contact.img}
              alt="Profile Pic"
            />
            <div className="profile-name">
              <h3>
                {contact.firstName} {contact.lastName}
              </h3>
              <span className="role">{contact.role}</span>
              <div className="contact-info">
                <p>{contact.phoneNumber}</p>
                <p>
                  <a href={`mailto:${contact.emailAddress}`}>
                    {contact.emailAddress}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*------------------------------- Bio Section-------------------------------- */}
        <div className="bio-section">
          <h4>About Company</h4>
          <p>
            Wick Enterprises is a leading global company known for innovation
            and excellence in the operations sector. Our team, led by
            professionals like {contact.firstName} {contact.lastName}, delivers
            world-class solutions across various domains.
          </p>
        </div>

        {/*---------------------------- Company Details Section ---------------------------*/}
        <div className="contact-details">
          <h4>Company Information</h4>
          <div className="details-grid">
            <div>
              <strong>Company Name:</strong> Wick Enterprises Pvt Ltd
            </div>
            <div>
              <strong>Department:</strong> Operations
            </div>
            <div>
              <strong>Designation:</strong> Senior Manager
            </div>
            <div>
              <strong>Employee ID:</strong> EMP-009007
            </div>
            <div>
              <strong>Date of Joining:</strong> 12/03/2019
            </div>
            <div>
              <strong>Work Location:</strong> New York Office
            </div>
            <div>
              <strong>Employment Type:</strong> Full-time
            </div>
            <div>
              <strong>Reporting Manager:</strong> John Smith
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
