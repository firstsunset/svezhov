import React from 'react';
import Link from 'next/link';

import styles from '../styles/index.module.css';
import Button from '../components/button/Button';

const Index = () => {
    return (
        <div className={styles.main}>
            <div className={styles.mainWrapper}>
                <h1 className={styles.mainTitle}>SVEZHOV MAXIM</h1>
                <p>fashion designer</p>
                <Link href='/dress' >
                    <Button
                        text={'New Collection'}
                    />    
                </Link>
            </div>
        </div>
    );
};

export default Index;