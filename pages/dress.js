import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/dress.module.css';
import FirstSectionImage from '../assets/cards_images/1.jpg';
import SecondSectionImage from '../assets/cards_images/2.jpg';
import Button from '../components/button/Button';

const Dress = () => {
    return (
        <div className={styles.dressContainer}>
            <h1 className={styles.header}>Collections</h1>
            <section className={styles.section}>
                <Image src={FirstSectionImage} className={styles.firstImage}/>
                <div>
                    <Image src={SecondSectionImage} className={styles.secondImage}/>
                    <Link href='/dress' >
                        <Button
                            type='primary'
                            text={'Show'}
                        />    
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Dress;