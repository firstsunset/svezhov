import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Navbar.module.css';
import Logo from '../../assets/6355946642.webp';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link href='/'>
                <Image src={Logo} className={styles.navbarLogo} />                
            </Link>
            <div className={styles.navbarLinksBlock}>
                <Link href='/dress' className={styles.navbarLink}>dress</Link>
                <Link href='/illustrations' className={styles.navbarLink}>illustrations</Link>
                <Link href='/contacts' className={styles.navbarLink}>contacts</Link>
            </div>
        </div>
    );
};

export default Navbar;