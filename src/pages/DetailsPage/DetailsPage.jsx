import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import s from "./DetailsPage.module.css";

import ImageDetailsCar from "../../components/ImageDetailsCar/ImageDetailsCar";
import BookingDetails from "../../components/BookingDetails/BookingDetails";
import BookingForm from "../../components/BookingForm/BookingForm";
import CarInfo from "../../components/CarInfo/CarInfo";

const DetailsPage = () => {
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
    <div>
      <div className={s.container}>
        <div className={s.topSection}>
          <div className={s.left}>
            <ImageDetailsCar car={car} />
            <BookingForm details={setCar} />
          </div>
          <div className={s.right}>
            <BookingDetails car={car} className={s.bookingDetails} />
            <CarInfo car={car} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
