import React, { useEffect, useState } from "react";
import axios from "axios";
import s from "./Form.module.css";
import { HiChevronDown } from "react-icons/hi2";
import { fetchCars, fetchBrands } from "../../services/api";

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
    const fetchBrands = async () => {
      try {
        const response = await axios.get("/brands");
        setBrands(response.data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const carsData = await fetchCars();
        const uniquePrices = [
          ...new Set(carsData.map((car) => Number(car.rentalPrice))),
        ];
        setPrices(uniquePrices.sort((a, b) => a - b));
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchPrices();
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

    if (!/^\d*$/.test(rawValue)) return;
    if (e.target.value.length >= 5) return;

    const newFilters = { ...filters, [field]: rawValue };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <form className={s.filters}>
      <div className={s.wrapperForSvgFirst}>
        <div className={s.filterGroup}>
          <label className={s.label}>Car brand</label>

          <select
            name="brand"
            value={filters.brand}
            onChange={handleFilterChange}
            className={s.firstChildInput}
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
      </div>

      <div className={s.wrapperForSvgSecond}>
        <div className={s.filterGroup}>
          <label className={s.label}>Price / 1 hour</label>
          <select
            name="price"
            value={filters.price}
            onChange={handleFilterChange}
            className={s.secondChildInput}
          >
            <option value="">Choose a price</option>
            {prices.map((price) => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </select>
        </div>
        <HiChevronDown className={s.selectIcon} />
      </div>

      <div className={s.filterGroupFirst}>
        <label className={s.label}>Car mileage / km</label>
        <div className={s.formInput}>
          <div className={s.mileageLabelFirst}>
            <label className={s.mileageLabelFrom}>
              <span className={s.mileagePrefix}>From</span>
              <input
                type="text"
                name="mileageFrom"
                value={formatNumber(filters.mileageFrom)}
                onChange={(e) => handleMileageChange(e, "mileageFrom")}
              />
            </label>
          </div>

          <div className={s.mileageLabelSecond}>
            <label className={s.mileageLabelTo}>
              <span className={s.mileagePrefix}>To</span>
              <input
                type="text"
                name="mileageTo"
                value={formatNumber(filters.mileageTo)}
                onChange={(e) => handleMileageChange(e, "mileageTo")}
                className={s.secondToInput}
              />
            </label>
          </div>
        </div>
      </div>

      <div className={s.filterGroupSecond}>
        <button type="submit" className={s.searchBtn}>
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
