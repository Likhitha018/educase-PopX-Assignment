import React from "react";
import "../Styles/signup.css"
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate=useNavigate()
  return (
    <div className="signup-container">
      <div className="signup-card">

        <h2>Create your <br/>PopX account</h2>

        <form>

          <div className="input-group">
            <label>Full Name*</label>
            <input type="text" placeholder="Marry Doe" />
          </div>

          <div className="input-group">
            <label>Phone number*</label>
            <input type="text" placeholder="Marry Doe" />
          </div>

          <div className="input-group">
            <label>Email address*</label>
            <input type="email" placeholder="Marry Doe" />
          </div>

          <div className="input-group">
            <label>Password*</label>
            <input type="password" placeholder="Marry Doe" />
          </div>

          <div className="input-group">
            <label>Company name</label>
            <input type="text" placeholder="Marry Doe" />
          </div>

          <div className="agency">
            <p>Are you an Agency?*</p>

            <label>
              <input type="radio" name="agency"/> Yes
            </label>

            <label>
              <input type="radio" name="agency"/> No
            </label>
          </div>

          

        </form>
        <button onClick={() => navigate("/account")} className="signup-btn">Create Account</button>

      </div>
    </div>
  );
}

export default Signup;