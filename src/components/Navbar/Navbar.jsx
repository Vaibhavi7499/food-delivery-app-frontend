import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <Link to="/home">
        <img className="logo" src={assets.logo} />
      </Link>

      <ul className="navbar-menu">
        <Link
          className={menu === "home" ? "active" : ""}
          to="/"
          onClick={() => setMenu("home")}
        >
          home
        </Link>
        <a
          className={menu === "menu" ? "active" : ""}
          href="#explore-menu"
          onClick={() => setMenu("menu")}
        >
          menu
        </a>
        <a
          className={menu === "mobile-app" ? "active" : ""}
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
        >
          mobile-app
        </a>
        <a
          className={menu === "contact-us" ? "active" : ""}
          href="#footer"
          onClick={() => setMenu("contact-us")}
        >
          contact us
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} />
          </Link>
          <div></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
