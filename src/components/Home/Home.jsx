import React from "react";
import s from "./Home.module.css";
import picture from "../../assets/picture.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={s.hero}>
      <div className={s.container}>
        <img className={s.img} src={picture} width="1440" height="700" />
        <div className={s.position}>
          <h1 className={s.title}>Find your perfect rental car</h1>
          <p className={s.text}>
            Browse our catalog and choose the best car for your needs.
          </p>
          <Link to="/catalog" className={s.link}>
            View Catalog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
