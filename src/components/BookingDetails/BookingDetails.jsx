import React from "react";
import s from "./BookingDetails.module.css";
import { GrLocation } from "react-icons/gr";

const BookingDetails = ({ car }) => {
  return (
    <div className={s.detailsCar}>
      <div className={s.titleWrapper}>
        <h1 className={s.title}>
          {car.brand}&nbsp;{car.model}, {car.year}
        </h1>
        <p className={s.id}>
          Id: {parseInt(car.id.replace(/\D/g, "").slice(-4))}
        </p>
      </div>
      <div className={s.address}>
        <GrLocation className={s.icon} />
        <p>{car.address.split(", ")[1]}, </p>
        <p className={s.country}>{car.address.split(", ")[2]}</p>
        <p>Mileage: {car.mileage} km</p>
      </div>
      <div className={s.rentalPrice}>
        <p>${car.rentalPrice}</p>
      </div>
      <div className={s.description}>{car.description}</div>
    </div>
  );
};

export default BookingDetails;
