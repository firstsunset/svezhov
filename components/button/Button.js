import React from 'react';
import styles from './Button.module.css';

const Button = ({type = 'normal', text}) => {
    return (
        <>
            <button className={type === 'normal' ? styles.buttonNormal : styles.buttonPrimary}>{text}</button>
        </>
    );
};

export default Button;