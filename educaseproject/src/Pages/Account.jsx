import React from "react";
import "../Styles/account.css"
function Account() {
  return (
    <div className="account-container">

      <h3 className="title">Account Settings</h3>

      <div className="account-card">

        <div className="profile-section">

          <div className="image-box">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
            />
            <div className="camera-icon">📷</div>
          </div>

          <div className="user-info">
            <h4>Marry Doe</h4>
            <p>Marry@gmail.com</p>
          </div>

        </div>

        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>

        <div className="divider"></div>

      </div>

    </div>
  );
}

export default Account;