import "../Styles/login.css"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate=useNavigate()

  return (
    <div className="page2">
      <div className="mobile">

        <h2 className="titlelogin">
          Signin to your <br /> PopX account
        </h2>

        <p className="subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        <div className="input-field">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" />
        </div>

        <div className="input-field">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>

        <button onClick={() => navigate("/account")} className="login-btn">Login</button>

      </div>
    </div>
  );
}

export default Login;