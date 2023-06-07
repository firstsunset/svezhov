import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/booking.module.css';
import ThirdImage from '../assets/collection_2.jpg';
import MainButton from '../components/button/Button';
import FirstImage from '../assets/collection_1.jpg';
import SecondImage from '../assets/illustration_1.jpg';
import LageImage from '../assets/illustration_2.jpg';
import ShadowTitle from '../assets/mainSvg/ShadowTitle';
import { BookingModal } from '../components/bookingModal/BookingModal';

const initialValues = { name: '', email: '', subject: '', message: '' };
const initState = { values: initialValues };

const Booking = () => {
 const [formValues, setFormValues] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = formValues;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setFormValues((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
  }));

  const onSubmit = async () => {
    setFormValues((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendBookingForm(values);
      setTouched({});
      setFormValues(initState);
    } catch (error) {
      setFormValues((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <div className={styles.main}>
      <form className={styles.form}  >
        <label>Name</label>
        <input className={styles.input} type='text' name="name" value={values.name} onChange={handleChange} onBlur={onBlur}  />
          
        <label>Email</label>
        <input className={styles.input} type='email' name="email" value={values.email} onChange={handleChange} onBlur={onBlur}  />

        <label>Subject</label>
        <input className={styles.input} type='text' name="subject" value={values.subject} onChange={handleChange} onBlur={onBlur}  />
          
        <label>Message</label>
        <textarea className={styles.inputMessage}  name="message" value={values.message} onChange={handleChange} onBlur={onBlur}  />
          
        <MainButton text={'Забронировать'} width={300} onClick={onSubmit}  />
      </form>
    </div>
  );
};

export default Booking;