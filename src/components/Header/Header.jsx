import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/logo.svg"; // Імпортуємо SVG

const Header = () => {
  return (
    <header className={s.wrapper}>
      <nav>
        <a href="/">
          <img src={logo} alt="Logo" width="104" height="16" /> {/* Логотип */}
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Catalog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
