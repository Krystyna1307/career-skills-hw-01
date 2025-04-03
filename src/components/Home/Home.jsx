import React from "react";
import s from "./Home.module.css";
import picture from "../../assets/picture.jpg";

const Home = () => {
  return (
    <div className={s.wrapper}>
      <img src={picture} />
      <h1>Find your perfect rental car</h1>
      <p>Browse our catalog and choose the best car for your needs.</p>
      <button>View Catalog</button>
    </div>
  );
};

export default Home;
