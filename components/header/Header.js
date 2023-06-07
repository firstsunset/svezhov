import React from 'react';
import Link from 'next/link';

import styles from './Header.module.css';
import Logo from '../../assets/Logo';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.navbar}>
                <Link href='/' className={styles.navbarLink}>Главная</Link>
                <Link href='services' className={styles.navbarLink}>Услуги</Link>
                <Link href='/'>
                    <Logo color='white'/>                
                </Link>
                <Link href='/collections' className={styles.navbarLink}>Коллекции</Link>
                <Link href='/about' className={styles.navbarLink}>О нас</Link>
            </div>
        </div>
    );
};

export default Header;