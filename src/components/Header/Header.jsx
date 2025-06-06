import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to="/">
          <img src={logo} alt="Logo" width="104" height="16" />
        </Link>
        <nav className={s.nav}>
          <NavLink to="/" end className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={buildLinkClass}>
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
