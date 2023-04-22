import "./App.css";
// import { Dashboard } from "./pages/dashboard";

import { Login } from "./components/Login";
import { Dashboard } from "./components/dashboard";
import { Routes, Route, Link } from "react-router-dom";
import { Signup } from "./components/Signup";

function App() {
  return (
    // <div className="App">
    //   <h1>Super League - Level 2 - Team 16</h1>
    <div className="App">
      <nav className="navigation">
        <ul className="home">
          <li>
            <Link to="/">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
