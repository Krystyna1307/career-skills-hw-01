import React from "react";
import s from "./BookingDetails.module.css";

const BookingDetails = ({ car }) => {
  return (
    <div>
      <div className={s.detailsCar}>
        <div className={s.titleWrapper}>
          <h1 className={s.title}>
            {car.brand}&nbsp;{car.model}, {car.year}
          </h1>
          <p>id:</p>
        </div>
        <div className={s.address}>
          <p>{car.address.split(", ")[1]}</p>
          <p>{car.address.split(", ")[2]}</p>
          <p>Mileage: {car.mileage} km</p>
        </div>
        <div className={s.rentalPrice}>
          <p>${car.rentalPrice}</p>
        </div>
        <div className={s.description}>{car.description}</div>
      </div>
    </div>
  );
};

export default BookingDetails;
