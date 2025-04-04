import React, { useEffect, useState } from "react";
import s from "./Catalog.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Catalog = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("https://car-rental-api.goit.global/cars").then((response) => {
      setCars(response.data);
    });
  }, []);

  if (!cars) return <p>Loading...</p>;

  return (
    <div className={s.container}>
      <h3>Car Catalog</h3>
      <div className={s.carlist}>
        {cars.map((car) => (
          <div key={car.id} className={s.carcard}>
            <img src={car.img} alt={car.name} />
            <h2>
              {car.brand} {car.name}
            </h2>
            <p>Price: ${car.rentalPrice}/day</p>
            <Link to={`/catalog/${car.id}`} className={s.btn}>
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
