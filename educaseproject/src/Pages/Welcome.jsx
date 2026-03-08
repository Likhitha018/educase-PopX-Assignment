import { useNavigate } from "react-router-dom";
import "../Styles/welcome.css"

function Welcome() {
    const navigate=useNavigate()
    return (
      <div className="page">
        <div className="mobile-container">
          
          <div className="content">
            <h1>Welcome to PopX</h1>
  
            <p>
              Lorem ipsum dolor sit amet,<br/>
              consectetur adipiscing elit,
            </p>
  
            <button onClick={() => navigate("/signup")} className="create-btn">Create Account</button>
  
            <button onClick={() => navigate("/login")} className="login-btn">
              Already Registered? Login
            </button>
          </div>
  
        </div>
      </div>
    );
  }

export default Welcome;