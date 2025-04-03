import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header}>
      <a href="/">
        <img src={logo} alt="Logo" width="104" height="16" />
      </a>
      <nav className={s.nav}>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
      </nav>
    </header>
  );
};

export default Header;
