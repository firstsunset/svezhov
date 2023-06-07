import React from 'react';
import styles from './Button.module.css';
import ButtonIcon from '../../assets/ButtonIcon';

const Button = ({width = 248, text, onClick}) => {
    return (
        <>
            <button style={{width: `${width}px`}} className={styles.button} onClick={onClick}>
              {text}
              <ButtonIcon />
            </button>
        </>
    );
};

export default Button;