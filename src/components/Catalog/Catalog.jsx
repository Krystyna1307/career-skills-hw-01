import React, { useEffect, useState } from "react";
import axios from "axios";
import s from "./Catalog.module.css";

const Catalog = ({ filters }) => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://car-rental-api.goit.global/cars?page=${page}`)
      .then((response) => {
        let filteredCars = response.data.cars;

        if (filters.brand) {
          filteredCars = filteredCars.filter(
            (car) => car.brand === filters.brand
          );
        }
        if (filters.mileageFrom) {
          filteredCars = filteredCars.filter(
            (car) => car.mileage >= Number(filters.mileageFrom)
          );
        }
        if (filters.mileageTo) {
          filteredCars = filteredCars.filter(
            (car) => car.mileage <= Number(filters.mileageTo)
          );
        }
        if (filters.price) {
          filteredCars = filteredCars.filter(
            (car) => Number(car.rentalPrice) === Number(filters.price)
          );
        }

        setCars(filteredCars);
      })
      .catch((error) => console.error("Error fetching cars:", error));
  }, [filters, page]);

  return (
    <div className={s.container}>
      <div className={s.carlist}>
        {cars.map((car) => (
          <div key={car.id} className={s.carcard}>
            <img src={car.img} alt={car.model} className={s.carimg} />
            <h2>
              {car.brand} {car.model}, {car.year}
            </h2>
            <p>${car.rentalPrice}</p>
            <button className={s.btn}>Read more</button>
          </div>
        ))}
      </div>
      <button onClick={() => setPage(page + 1)} className={s.loadMore}>
        Load more
      </button>
    </div>
  );
};

export default Catalog;
