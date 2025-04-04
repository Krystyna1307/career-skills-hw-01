import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import s from "./Details.module.css";

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
      <h1>
        {car.brand} {car.name}
      </h1>
      <img src={car.img} alt={car.name} />
      <p>{car.description}</p>
      <p>
        <strong>Price:</strong>${car.rentalPrice}/day
      </p>
      <button className={s.btn}>Book Now</button>
    </div>
  );
};

export default Details;
