import React from "react";
import s from "./CarInfo.module.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BsCalendar2Week, BsCarFront, BsFuelPump } from "react-icons/bs";
import { GoGear } from "react-icons/go";

const CarInfo = () => {
  return (
    <div className={s.wrapper}>
      {/* Rental Conditions */}
      <section className={s.section}>
        <h3 className={s.title}>Rental Conditions:</h3>
        <ul>
          <li>
            <IoIosCheckmarkCircleOutline className={s.icon} /> Minimum age : 25
          </li>
          <li>
            <IoIosCheckmarkCircleOutline className={s.icon} /> Security deposit
            required
          </li>
          <li>
            <IoIosCheckmarkCircleOutline className={s.icon} /> Valid driver's
            license
          </li>
        </ul>
      </section>

      {/* Car Specifications */}
      <section className={s.section}>
        <h3 className={s.title}>Car Specifications:</h3>
        <ul>
          <li>
            <BsCalendar2Week className={s.icon} /> Year: 2008
          </li>
          <li>
            <BsCarFront className={s.icon} /> Type: Suv
          </li>
          <li>
            <BsFuelPump className={s.icon} /> Fuel Consumption: 10.5
          </li>
          <li>
            <GoGear className={s.icon} /> Engine Size: 3.6L V6
          </li>
        </ul>
      </section>

      {/* Accessories */}
      <section className={s.section}>
        <h3 className={s.title}>Accessories and functionalities:</h3>
        <ul>
          <li>
            <IoIosCheckmarkCircleOutline className={s.icon} /> Leather seats
          </li>
          <li>
            <IoIosCheckmarkCircleOutline className={s.icon} /> Panoramic sunroof
          </li>
          <li>
            <IoIosCheckmarkCircleOutline className={s.icon} /> Remote start
          </li>
          <li>
            <IoIosCheckmarkCircleOutline className={s.icon} /> Blind-spot
            monitoring
          </li>
          <li>
            <IoIosCheckmarkCircleOutline className={s.icon} /> Power liftgate
          </li>
          <li>
            <IoIosCheckmarkCircleOutline className={s.icon} /> Premium audio
            system
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CarInfo;
