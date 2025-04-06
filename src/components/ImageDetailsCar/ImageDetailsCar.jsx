import React from "react";
import s from "./ImageDetailsCar.module.css";

const ImageDetailsCar = ({ car }) => {
  return (
    <div className={s.details}>
      <div className={s.carImg}>
        <img src={car.img} alt={car.name} className={s.img} />
      </div>
    </div>
  );
};

export default ImageDetailsCar;
