import React, { useState } from "react";
import s from "./BookingForm.module.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут можна зробити запит до API, якщо потрібно
    console.log("Form submitted:", formData);
    setSuccess(true);
    setFormData({ name: "", email: "", date: "", comment: "" });

    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h2>Book your car now</h2>
      <p className={s.sub}>Stay connected! We are always ready to help you.</p>
      <div className={s.formInput}>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <textarea
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Send</button>
      {success && <p className={s.success}>✅ Car successfully booked!</p>}
    </form>
  );
};

export default BookingForm;
