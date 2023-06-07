import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/shadow.module.css';
import ThirdImage from '../assets/collection_2.jpg';
import MainButton from '../components/button/Button';
import FirstImage from '../assets/collection_1.jpg';
import SecondImage from '../assets/illustration_1.jpg';
import LageImage from '../assets/illustration_2.jpg';
import ShadowTitle from '../assets/mainSvg/ShadowTitle';
import { BookingModal } from '../components/bookingModal/BookingModal';



const Shadow = () => {
  const [showModal, setShowModal] = useState(false);

  if (showModal) {
    document.body.style.overflow = 'hidden';
  }

  return (
    <div style={{ overflowY: showModal ? 'hidden' : 'auto' }} className={styles.main}>
      <div className={styles.mainTitle}>
        <ShadowTitle width={395} height={102} color='#FFFFFF'/>
      </div>

      <div className={styles.mainFirstSection}>
        <div className={styles.mainFirstSectionImage}>
          <Image
            src={FirstImage}
            alt="style"
            className={styles.mainImage}
          />
          <Image
            src={SecondImage}
            alt="style"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.mainSectionText}>
          <div>
            Образ 1 <br/>
            Описание Описание <br/>
            Описание Описание <br/>
            Описание Описание
          </div>
          <Link href='/booking' className={styles.link}  >
            <MainButton text={'Забронировать'} width={308} onClick={() => setShowModal(true)}  />                    
          </Link>
        </div>
        {showModal && createPortal(
          <BookingModal onClose={() => setShowModal(false)} />,
          document.body
        )}
      </div>

      <div className={styles.mainSecondSection}>
        <div className={styles.mainSecondSectionText}>
          Образ 1 <br/>
          Описание Описание <br/>
          Описание Описание <br/>
          Описание Описание
        </div>
        <Image
          src={LageImage}
          alt="style"
          className={styles.mainLargeImage}
        />
      </div>

      <div className={styles.mainFirstSection}>
        <div className={styles.mainFirstSectionImage}>
          <Image
            src={ThirdImage}
            alt="style"
            className={styles.mainImage}
          />
          <Image
            src={FirstImage}
            alt="style"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.mainSectionText}>
          <div>
            Образ 1 <br/>
            Описание Описание <br/>
            Описание Описание <br/>
            Описание Описание
          </div>
          <Link href='/collections' className={styles.link}  >
            <MainButton text={'Забронировать'} width={308} />                    
          </Link>
        </div>
      </div>

      <div className={styles.mainSecondSection}>
        <div className={styles.mainSecondSectionText}>
          Образ 1 <br/>
          Описание Описание <br/>
          Описание Описание <br/>
          Описание Описание
        </div>
        <Image
          src={LageImage}
          alt="style"
          className={styles.mainLargeImage}
        />
      </div>
      
      <div className={styles.mainFirstSection}>
        <div className={styles.mainFirstSectionImage}>
          <Image
            src={ThirdImage}
            alt="style"
            className={styles.mainImage}
          />
          <Image
            src={FirstImage}
            alt="style"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.mainSectionText}>
          <div>
            Образ 1 <br/>
            Описание Описание <br/>
            Описание Описание <br/>
            Описание Описание
          </div>
          <Link href='/collections' className={styles.link}  >
            <MainButton text={'Забронировать'} width={308} />                    
          </Link>
        </div>
      </div>

      <div className={styles.mainSecondSection}>
        <div className={styles.mainSecondSectionText}>
          Образ 1 <br/>
          Описание Описание <br/>
          Описание Описание <br/>
          Описание Описание
        </div>
        <Image
          src={LageImage}
          alt="style"
          className={styles.mainLargeImage}
        />
      </div>

    </div>
  );
};

export default Shadow;