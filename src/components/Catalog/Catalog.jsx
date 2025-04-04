import React, { useEffect, useState } from "react";
import axios from "axios";
import s from "./Catalog.module.css";

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]); // Список брендів
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    brand: "",
    price: "",
    yearFrom: "",
    yearTo: "",
  });

  // Завантаження брендів з API
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

  // Обробка зміни фільтрів
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className={s.container}>
      <h3 className={s.title}>Car Catalog</h3>

      {/* Форма фільтрів */}
      <div className={s.filters}>
        <select
          name="brand"
          value={filters.brand}
          onChange={handleFilterChange}
        >
          <option value="">Choose a brand</option>
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
        >
          <option value="">Choose a price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>

        <input
          type="number"
          name="yearFrom"
          placeholder="From"
          value={filters.yearFrom}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="yearTo"
          placeholder="To"
          value={filters.yearTo}
          onChange={handleFilterChange}
        />

        <button className={s.searchBtn}>Search</button>
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
