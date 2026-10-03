import "./Header.css";
import logo from "../assets/osam.gif";
import { useContext } from "react";
import { ThemeContext } from "./Themecontext";
import { AuthContext } from "../components/Authcontext";
import { Link } from "react-router-dom";
function Header() {
 
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const {  isLoggedIn } = useContext(AuthContext);
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <div className="left">
            <img src={logo} alt="Fresh Start" />
            <span>Fresh Start</span>
          </div>

          <div className="right">
            <a href="#">☰</a>
          </div>
          <button onClick={toggleTheme}>
          {isDark ? "☀️" : "🌙"}
          </button>
         
         <p>{isLoggedIn ? "Logged In" : "Logged Out"}</p>
       <Link className="header-btn" to="/login-details">
       login
      </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;