import React from "react";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.wrapper}>
      <h1>Find your perfect rental car</h1>
      <p>Browse our catalog and choose the best car for your needs.</p>
      <button>View Catalog</button>
    </div>
  );
};

export default Home;
