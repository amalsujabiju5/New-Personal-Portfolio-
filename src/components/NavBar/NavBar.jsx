import React, { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState("home");

  const toggleNavbar = () => {
    setActive(!active);
  };

  const handleMenuClick = (menu) => {
    setMenu(menu);
    setActive(false); // Close the navbar after clicking a menu item on smaller screens
    const section = document.getElementById(menu);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="nav">
      <a href="#" className="brand" onClick={() => handleMenuClick("home")}>
        Amal
      </a>
      <ul className={`navItems ${active ? "active" : ""}`}>
        <li
          onClick={() => handleMenuClick("home")}
          className={menu === "home" ? "active" : ""}
        >
          <a>Home</a>
        </li>
        <li
          onClick={() => handleMenuClick("introduction")}
          className={menu === "introduction" ? "active" : ""}
        >
          <a>Introduction</a>
        </li>
        <li
          onClick={() => handleMenuClick("education")}
          className={menu === "education" ? "active" : ""}
        >
          <a>Education</a>
        </li>
        <li
          onClick={() => handleMenuClick("projects")}
          className={menu === "projects" ? "active" : ""}
        >
          <a>Projects</a>
        </li>
        <li
          onClick={() => handleMenuClick("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          <a>Contact</a>
        </li>
      </ul>
      <div onClick={toggleNavbar} className="toggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default NavBar;
