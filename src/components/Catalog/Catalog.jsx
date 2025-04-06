import React, { useEffect, useState } from "react";
import axios from "axios";
import s from "./Catalog.module.css";
import { Link } from "react-router-dom";

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
      <div className={s.carList}>
        {cars.map((car) => (
          <div key={car.id} className={s.carCard}>
            <img src={car.img} alt={car.model} className={s.carImg} />
            <div className={s.title}>
              <div className={s.titleFlex}>
                <p>{car.brand}&nbsp;</p>
                <p className={s.currentColor}>{car.model}</p>
                <p>, {car.year}</p>
              </div>

              <p>${car.rentalPrice}</p>
            </div>
            <div className={s.details}>
              <div className={s.detailsFirst}>
                <p>{car.address.split(", ")[1]}</p>
                <p>{car.address.split(", ")[2]}</p>
                <p>{car.rentalCompany}</p>
              </div>
              <div className={s.detailsSecond}>
                <p>{car.type}</p>
                <p>{car.mileage} km</p>
              </div>
            </div>
            <Link to={`/catalog/${car.id}`} className={s.btn}>
              Read more
            </Link>
          </div>
        ))}
      </div>
      <svg className={s.iconHeart}>
        <use href="../../assets/icons.svg#icon-heart"></use>
      </svg>
      <button onClick={() => setPage(page + 1)} className={s.loadMore}>
        Load more
      </button>
    </div>
  );
};

export default Catalog;
