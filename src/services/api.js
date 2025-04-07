import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const fetchCars = async () => {
  const { data } = await axios.get("/cars");
  return data.cars;
};

export const fetchCarsById = async (id) => {
  const { data } = await axios.get(`/cars/${id}`);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await axios.get("/brands");
  return data;
};

export const fetchCarsByPage = async (page) => {
  const response = await axios.get(`/cars?page=${page}`);
  return response.data.cars;
};
