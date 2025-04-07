import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "./DetailsPage.module.css";
import { fetchCarsById } from "../../services/api";

import ImageDetailsCar from "../../components/ImageDetailsCar/ImageDetailsCar";
import BookingDetails from "../../components/BookingDetails/BookingDetails";
import BookingForm from "../../components/BookingForm/BookingForm";
import CarInfo from "../../components/CarInfo/CarInfo";
import Loader from "../../components/Loader/Loader";

const DetailsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCarsById(id);
      setCar(data);
    };
    getData();
  }, [id]);

  if (!car) return <Loader />;

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
