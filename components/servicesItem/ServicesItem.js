import React from 'react';
import styles from './ServicesItem.module.css';

const ServicesItem = ({title, text1, text2, text3, text4}) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.textBlock}>
                <div className={styles.text}>{text1}</div>
                <div className={styles.text}>{text2}</div>
                {
                    text3 && <div className={styles.text}>{text3}</div>                 
                }
                {
                    text4 && <div className={styles.text}>{text4}</div>
                }
            </div>
        </div>
    );
};

export default ServicesItem;