import { Link } from "react-router-dom";
import "./Header.css";  

function Header() {
  return (
    <header className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </header>
  );
}

export default Header;
