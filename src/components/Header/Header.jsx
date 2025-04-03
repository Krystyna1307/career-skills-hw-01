import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.wrapper}>
      <nav>
        <a href="">RentalCar</a>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Catalog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
