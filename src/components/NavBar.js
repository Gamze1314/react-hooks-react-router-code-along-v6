import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink 
      to="/" 
      className="nav-link">
        Home
      </NavLink>
      <NavLink 
      to="/about" 
      className="nav-link">
        About
      </NavLink>
      <NavLink 
      to="/login" 
      className="nav-link">
        Login
      </NavLink>
    </nav>
  );
}


export default NavBar
// NavLinks allow us to add styling => adds a tag into DOM. takes to property => Link to "somewhere"