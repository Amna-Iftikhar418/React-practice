import{Link} from "react-router-dom";
import "./Navbar.css";
export default function Navbar({ onSignInClick }) {
  return (
    <div className="Nav">
      <img style={{ width: "80px" }} src="/nike.png" alt="Nike" />
      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Jordan</li>
        <li>Sports</li>
       <li> <Link to="/ContactUs">Contact Us</Link></li>



      </ul>
      <button onClick={onSignInClick}>Sign-In</button>
    </div>
  );
}
