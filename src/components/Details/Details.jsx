import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import s from "./Details.module.css";
import Booking from "../Booking/Booking";
import BookingDetails from "../BookingDetails/BookingDetails";
import CarInfo from "../CarInfo/CarInfo";

const Details = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    axios
      .get(`https://car-rental-api.goit.global/cars/${id}`)
      .then((response) => {
        setCar(response.data);
      });
  }, [id]);

  if (!car) return <p>Loading...</p>;

  return (
    <div className={s.details}>
      <div className={s.carImg}>
        <img src={car.img} alt={car.name} className={s.img} />
      </div>

      <Booking details={setCar} />
      <BookingDetails car={car} />
      <CarInfo />
    </div>
  );
};

export default Details;
