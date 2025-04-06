import React from "react";
import s from "./CarInfo.module.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BsCalendar2Week, BsCarFront, BsFuelPump } from "react-icons/bs";
import { GoGear } from "react-icons/go";

const CarInfo = ({ car }) => {
  return (
    <div className={s.wrapper}>
      {/* Rental Conditions */}
      <section className={s.section}>
        <h3 className={s.title}>Rental Conditions:</h3>
        <ul>
          {car.rentalConditions.map((condition, index) => (
            <li key={index}>
              <IoIosCheckmarkCircleOutline className={s.icon} /> {condition}
            </li>
          ))}
        </ul>
      </section>

      {/* Car Specifications */}
      <section className={s.section}>
        <h3 className={s.title}>Car Specifications:</h3>
        <ul>
          {[
            {
              icon: <BsCalendar2Week className={s.icon} />,
              label: "Year",
              value: car.year,
            },
            {
              icon: <BsCarFront className={s.icon} />,
              label: "Type",
              value: car.type,
            },
            {
              icon: <BsFuelPump className={s.icon} />,
              label: "Fuel Consumption",
              value: car.fuelConsumption,
            },
            {
              icon: <GoGear className={s.icon} />,
              label: "Engine Size",
              value: car.engineSize,
            },
          ].map((item, index) => (
            <li key={index}>
              {item.icon} {item.label}: {item.value}
            </li>
          ))}
        </ul>
      </section>

      {/* Accessories */}
      <section className={s.section}>
        <h3 className={s.title}>Accessories and functionalities:</h3>
        <ul>
          {car.accessories.map((condition, index) => (
            <li key={index}>
              <IoIosCheckmarkCircleOutline className={s.icon} /> {condition}
            </li>
          ))}
        </ul>
        <ul>
          {car.functionalities.map((condition, index) => (
            <li key={index}>
              <IoIosCheckmarkCircleOutline className={s.icon} /> {condition}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CarInfo;
