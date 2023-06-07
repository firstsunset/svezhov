import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/collections.module.css';
import FirstCard from '../assets/collection_1.jpg';
import SecondCard from '../assets/collection_2.jpg';
import Logo from '../assets/Logo';

const collectionsList = [
  {
    image: SecondCard,
    title: 'Frida'
  },
  {
    image: FirstCard,
    title: 'Achromatica'
  },
  {
    image: SecondCard,
    title: 'Shadow'
  },
  {
    image: SecondCard,
    title: 'Liberty'
  },
  {
    image: FirstCard,
    title: 'Una fiore'
  },
  {
    image: SecondCard,
    title: 'Neon'
  },
]

const Collections = () => {
  return (
    <div className={styles.main}>
      <Logo color='#EB9264' rotate={-33.49} position='absolute' top={85} left='-2%'/>
      <Logo color='#EB9264' rotate={21.84} position='absolute' top={100} left='90%'/>
      <Logo color='#EB9264' rotate={-22.83} position='absolute' top={820} left='98%'/>
      <Logo color='#EB9264' rotate={44.38} position='absolute' top={722} left='28%'/>
      <Logo width={'30vw'} color='#EB9264' rotate={45.93} position='absolute' top={'93%'} left='64%'/>
      <h1 className={styles.mainTitle}>Коллекции</h1>
      <div className={styles.mainCardList}>
        {
          collectionsList.map((item) => {
          return (
            <div key={item.title} className={styles.mainCard}>
              <Image
                src={item.image}
                alt="Card"
                className={styles.mainCardImage}
              />
              <Link href='/shadow' className={styles.mainCardTitle} >  
              {item.title}

              </Link>
            </div>
          )
          })
        }
      </div>
    </div>
  );
};

export default Collections;