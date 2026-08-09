import "./Header.css";
import logo from "../assets/osam.gif";

function Header() {
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
        </nav>
      </div>
    </header>
  );
}

export default Header;