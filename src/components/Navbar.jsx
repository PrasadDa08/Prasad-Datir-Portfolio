import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-items">
      <h1>Prasad.</h1>
      <div className="nav-links">
        <NavLink exact to="/" activeClassName="active-link">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active-link">
          About
        </NavLink>
        <NavLink to="/projects" activeClassName="active-link">
          Projects
        </NavLink>
        <NavLink to="/contact" activeClassName="active-link">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
