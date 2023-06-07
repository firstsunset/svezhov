import React from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';

import styles from './Footer.module.css';
import FooterLogo from '../../assets/footer/FooterLogo';
import TelegramImg from '../../assets/footer/image 6.png';

const Footer = () => {
  const router = useRouter();
  
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
            <FooterLogo height={'100%'} />
        </div>
        <div className={styles.mainBlock}>
          {
            (router.pathname === '/') ?
            <Image
              src={TelegramImg}
              alt="Card"
              className={styles.telegramImage}
            />
            :
            <div className={styles.telegramImage} />
          }
          <div className={styles.timeBlock}>
            ПН-ПТ <br/>10.00 - 17.00
          </div>
          <div className={styles.addressBlock}>
            <div>+7 (999) 696-01-85</div>
            <div>г. Таганрог, пер. Смирсновский 121к</div>
          </div>
        </div>
      </div>
    );
};

export default Footer;