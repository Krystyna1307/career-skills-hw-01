import React, { useEffect, useState } from "react";
import axios from "axios";
import s from "./Form.module.css";
import { HiChevronDown } from "react-icons/hi2";

const Form = ({ onFilterChange }) => {
  const [brands, setBrands] = useState([]);
  const [prices, setPrices] = useState([]);
  const [filters, setFilters] = useState({
    brand: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
  });

  useEffect(() => {
    axios
      .get("https://car-rental-api.goit.global/brands")
      .then((response) => setBrands(response.data))
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  useEffect(() => {
    axios
      .get("https://car-rental-api.goit.global/cars")
      .then((response) => {
        const uniquePrices = [
          ...new Set(response.data.cars.map((car) => Number(car.rentalPrice))),
        ];
        setPrices(uniquePrices.sort((a, b) => a - b));
      })
      .catch((error) => console.error("Error fetching prices:", error));
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const formatNumber = (value) => {
    if (!value) return "";
    return new Intl.NumberFormat("en-US").format(Number(value));
  };

  const handleMileageChange = (e, field) => {
    const rawValue = e.target.value.replace(/,/g, "");

    // Перевіряємо, щоб було тільки число
    if (!/^\d*$/.test(rawValue)) return;

    if (e.target.value.length >= 5) return;

    const newFilters = { ...filters, [field]: rawValue };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <form className={s.filters}>
      <div className={s.filterGroup}>
        <label className={s.label}>Car brand</label>

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
      </div>
      <HiChevronDown className={s.selectIcon} />

      <div className={s.filterGroup}>
        <label className={s.label}>Price / 1 hour</label>
        <select
          name="price"
          value={filters.price}
          onChange={handleFilterChange}
        >
          <option value="">Choose a price</option>
          {prices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>
      <HiChevronDown className={s.iconSecond} />

      <div className={s.filterGroup}>
        <label className={s.label}>Car mileage / km</label>
        <div className={s.btnInputGroup}>
          <div className={s.formInput}>
            <label className={s.mileageLabel}>
              <span className={s.mileagePrefix}>From</span>
              <input
                type="text"
                name="mileageFrom"
                value={formatNumber(filters.mileageFrom)}
                onChange={(e) => handleMileageChange(e, "mileageFrom")}
              />
            </label>

            <label className={s.mileageLabel}>
              <span className={s.mileagePrefix}>To</span>
              <input
                type="text"
                name="mileageTo"
                value={formatNumber(filters.mileageTo)}
                onChange={(e) => handleMileageChange(e, "mileageTo")}
              />
            </label>
          </div>

          <button type="submit" className={s.searchBtn}>
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
