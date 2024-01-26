import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      {/* <div className="nav-clipart"></div> */}
      <nav className={mobileMenu ? "mobile-items" : "nav-items"}>
        <h1>PD.</h1>

        <div className={mobileMenu ? "mobile-menu" : "nav-links"}>
          <NavLink to="/" activeclassname="active-link">
            Home
          </NavLink>
          <NavLink to="/skills" activeclassname="active-link">
            Skills
          </NavLink>
          <NavLink to="/projects" activeclassname="active-link">
            Projects
          </NavLink>
          <NavLink to="/contact" activeclassname="active-link">
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
