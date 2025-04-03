import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header className={s.header}>
      <a href="/">
        <img src={logo} alt="Logo" width="104" height="16" />
      </a>
      <nav className={s.nav}>
        <NavLink className={buildLinkClass} to="/">Home</NavLink>
        <NavLink className={buildLinkClass} to="/catalog">Catalog</NavLink>
      </nav>
    </header>
  );
};

export default Header;
