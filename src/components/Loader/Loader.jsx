import React from "react";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div>
      <div className={s.loaderWrapper}>
        <div className={s.spinner}></div>
      </div>
    </div>
  );
};

export default Loader;
