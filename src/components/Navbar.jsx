import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <div className="nav-clipart"></div>
      <nav className="nav-items">
        <h1>PD.</h1>

        <div className={mobileMenu ? "mobile-menu" : "nav-links"}>
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
        <img
          src={
            mobileMenu
              ? "src/assets/images/352263_cancel_icon.png"
              : "src/assets/images/9035507_menu_outline_icon.png"
          }
          className={mobileMenu ? "cross-icon" : "menu-icon"}
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        />
      </nav>
    </>
  );
}

export default Navbar;
