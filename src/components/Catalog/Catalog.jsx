import React, { useEffect, useState } from "react";
import axios from "axios";
import s from "./Catalog.module.css";

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [prices, setPrices] = useState([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    brand: "",
    price: "",
    mileageFrom: "", // Спочатку пусте значення
    mileageTo: "", // Спочатку пусте значення
  });

  // Завантаження брендів
  useEffect(() => {
    axios
      .get("https://car-rental-api.goit.global/brands")
      .then((response) => setBrands(response.data))
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  // Завантаження автомобілів
  useEffect(() => {
    axios
      .get(`https://car-rental-api.goit.global/cars?page=${page}`)
      .then((response) => {
        if (Array.isArray(response.data.cars)) {
          setCars((prevCars) => [...prevCars, ...response.data.cars]);
        }
      })
      .catch((error) => console.error("Error fetching cars:", error));
  }, [page]);

  // Завантаження згідно ціни аренди

  useEffect(() => {
    fetch("https://car-rental-api.goit.global/cars")
      .then((response) => response.json())
      .then((data) => {
        // Отримуємо всі унікальні ціни та перетворюємо на числа
        const uniquePrices = [
          ...new Set(data.cars.map((car) => Number(car.rentalPrice))),
        ];
        setPrices(uniquePrices.sort((a, b) => a - b)); // Сортуємо за зростанням
      })
      .catch((error) => console.error("Error fetching prices:", error));
  }, []);

  // Завантаження даних згідно пробігу
  useEffect(() => {
    axios
      .get("https://car-rental-api.goit.global/cars")
      .then((response) => {
        const mileages = response.data.cars.map((car) => Number(car.mileage));

        if (mileages.length > 0) {
          const minMileage = Math.min(...mileages);
          const maxMileage = Math.max(...mileages);

          // НЕ оновлюємо `filters`, поки користувач сам не введе значення
          setFilters((prevFilters) => ({
            ...prevFilters,
            mileageFrom: prevFilters.mileageFrom || "", // Якщо не введено — залишаємо пустим
            mileageTo: prevFilters.mileageTo || "",
          }));
        }
      })
      .catch((error) => console.error("Error fetching mileage data:", error));
  }, []);

  // Обробка зміни фільтрів

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Фільтрація автомобілів
  const handleSearch = () => {
    axios
      .get("https://car-rental-api.goit.global/cars")
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
            (car) => Number(car.rentalPrice) === filters.price
          );
        }

        setCars(filteredCars);
      })
      .catch((error) => console.error("Error fetching filtered cars:", error));
  };

  return (
    <div className={s.container}>
      {/* Форма фільтрів */}
      <div className={s.filters}>
        <select
          name="brand"
          value={filters.brand}
          onChange={handleFilterChange}
          className={s.input}
        >
          <option value="Choose a brand">Choose a brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        <select
          name="price"
          value={filters.price}
          onChange={handleFilterChange}
          className={s.input}
        >
          <option value="Choose a price">Choose a price</option>
          {prices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="mileageFrom"
          placeholder="From"
          value={filters.mileageFrom || ""}
          onChange={handleFilterChange}
          className={s.input}
        />

        <input
          type="text"
          name="mileageTo"
          placeholder="To"
          value={filters.mileageTo || ""}
          onChange={handleFilterChange}
          className={s.input}
        />

        <button className={s.searchBtn} onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Відображення автомобілів */}
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

      {/* Кнопка "Load More" */}
      <button onClick={() => setPage(page + 1)} className={s.loadMore}>
        Load more
      </button>
    </div>
  );
};

export default Catalog;
