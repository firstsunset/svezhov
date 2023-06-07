import {  useState, } from 'react';
import styles from './BookingModal.module.css';
import CloseButtonIcon from '../../assets/CloseButtonIcon';
import MainButton from '../../components/button/Button';

const initialValues = { name: '', email: '', subject: '', message: '' };
const initState = { values: initialValues };

export const BookingModal = ({ onClose }) => {
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
      await sendContactForm(values);
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
    <div className={styles.container}>
      <div className={styles.modal} >
        <button className={styles.closeButton} onClick={onClose}>
          <CloseButtonIcon />
        </button>
        <form className={styles.modalForm}  >

          <label>Name</label>
          <input className={styles.input} type='text' name="name" value={values.name} onChange={handleChange} onBlur={onBlur}  />
          
          <label>Email</label>
          <input className={styles.input} type='email' name="email" value={values.email} onChange={handleChange} onBlur={onBlur}  />

          <label>Subject</label>
          <input className={styles.input} type='text' name="subject" value={values.subject} onChange={handleChange} onBlur={onBlur}  />
          
          <label>Message</label>
          <textarea className={styles.inputMessage}  name="message" value={values.message} onChange={handleChange} onBlur={onBlur}  />
          
          {/* <button type="submit" 
            disabled={
            !values.name || !values.email || !values.subject || !values.message
            }
            onClick={onSubmit}
            >Submit</button> */}

          <MainButton text={'Забронировать'} width={308} onClick={onSubmit}  />
        </form>
        

      </div>
    </div>
);
}