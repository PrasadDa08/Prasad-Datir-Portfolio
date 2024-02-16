import { useState, useEffect } from "react";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  console.log(activeLink);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    ); // Adjust threshold as needed

    // Observe all sections
    document.querySelectorAll("section").forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      // Cleanup observer
      sectionObserver.disconnect();
    };
  }, [activeLink]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (sectionId, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    scrollToSection(sectionId);
  };

  return (
    <>
      <nav className={mobileMenu ? "mobile-items" : "nav-items"}>
        <div className={mobileMenu ? "mobile-menu" : "nav-links"}>
          <li className={activeLink === "home" ? "active" : ""}>
            <a href="#" onClick={(event) => handleLinkClick("home", event)}>
              Home
            </a>
          </li>
          <li className={activeLink === "about" ? "active" : ""}>
            <a href="#" onClick={(event) => handleLinkClick("about", event)}>
              About
            </a>
          </li>
          <li className={activeLink === "projects" ? "active" : ""}>
            <a href="#" onClick={(event) => handleLinkClick("projects", event)}>
              Projects
            </a>
          </li>
          <li className={activeLink === "contact" ? "active" : ""}>
            <a href="#" onClick={(event) => handleLinkClick("contact", event)}>
              Contact
            </a>
          </li>
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
