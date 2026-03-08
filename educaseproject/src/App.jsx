import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/welcome";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/account" element={<Account/>}/>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;