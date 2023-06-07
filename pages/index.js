import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/index.module.css';
import Svezhov from '../assets/Svezhov';
import Costume from '../assets/Costume';
import Card from '../assets/DSCF2673.jpg';
import MainCardIcon from '../assets/MainCardIcon';
import MainCardText from '../assets/MainCardText';
import MainButton from '../components/button/Button';
import MainSvg from '../components/MainSvg/MainSvg';
import ServicesItem from '../components/servicesItem/ServicesItem';
import Logo from '../assets/Logo';

const servicesList = [
    {
        title: 'Пошив',
        text1: 'Пошив для маркетплейсов',
        text2: 'Индивидуальный пошив',
        text3: 'Массовый пошив'
    },
    {
        title: 'Аренда',
        text1: 'Аксессуары',
        text2: 'Костюмы',
        text3: 'Платья',
        text4: 'Обувь',
    },
    {
        title: 'Продажа',
        text1: 'Одежда',
        text2: 'Аксессуары',
        text3: 'Ткани',
    },
    {
        title: 'Вышивка',
        text1: 'Машинная вышивка',
        text2: 'Ручная вышивка',
    },
    {
        title: 'Косплей',
        text1: 'Костюмы',
        text2: 'Парики',
        text3: 'Обувь',
        text4: 'Крафт',
    },
    {
        title: '3D печать',
        text1: 'Разработка',
        text2: 'Печать',
    },

]

const Index = () => {
  return (
    <>
      <div className={styles.mainImage}>
        <MainSvg />
      </div>
      <div className={styles.mainContainer}>
        <Logo color='#EB9264' rotate={-33.49} position='absolute' top={59}/>
        <Logo color='#EB9264' rotate={102.18} position='absolute' top={244} left='88.5%'/>
        <Logo color='#EB9264' rotate={44.38} position='absolute' top={702} left='20.7%'/>
        <Logo color='#EB9264' rotate={-22.83} position='absolute' top={820} left='84vw'/>
        <Logo color='#EB9264' rotate={145.47} position='absolute' top={1117} left='60%'/>
        <Logo color='#EB9264' rotate={45.93} position='absolute' top={1540} />
        <Logo color='#EB9264' rotate={45.93} position='absolute' top={1793} left='93.4%'/>
        <Logo color='#EB9264' rotate={-33.49} position='absolute' top={2214} left='1.1%'/>
        <Logo color='#EB9264' rotate={20.9} position='absolute' top={2146} left='93.4%'/>
        <Logo color='#EB9264' rotate={-157.41} position='absolute' top={2498} left='64%'/>
        <Logo color='#EB9264' rotate={-108.01} position='absolute' top={2730} />
        <Logo color='#EB9264' rotate={44.38} position='absolute' top={2824} left='36.2%' />
        <Logo color='#EB9264' rotate={-22.83} position='absolute' top={2895} left='85vw' />

        <div className={styles.mainTitle}>
          <Svezhov width={'80vw'} />
          <Costume width={'50vw'} />
        </div>
        <div className={styles.mainCardBlock}>
          <div className={styles.mainCardIconBlock}>
            <MainCardIcon />
          </div>
          <div className={styles.mainCardTextBlock}>
            <MainCardText />
          </div>
          <Image
            width={245}
            height={'auto'}
            src={Card}
            alt="Card"
            className={styles.mainCardImage}
          />
        </div>
        <div className={styles.mainButtonBlock}>
          <div className={styles.mainButtonText}>
            Новая коллекция в азиатском стиле уже доступна для покупки и аренды! 
          </div>
          <Link href='/collections' >
            <MainButton text={'Смотреть'} />                    
          </Link>
        </div>
        
        <div className={styles.mainServicesBlock}>
          <div className={styles.mainServicesTitle}>Услуги</div>
          <div className={styles.mainServiceslist}>
            {
              servicesList.map((item) => {
                return (
                  <ServicesItem
                    key={item.title}
                    title={item.title}
                    text1={item.text1}
                    text2={item.text2}
                    text3={item.text3}
                    text4={item.text4}
                  />
                )
                })
            }
          </div>
        </div>
        <div className={styles.mainLastBlock}>
          <div className={styles.mainLastBlockTitle}>СОТРУДНИЧЕСТВО</div>
            <div className={styles.mainLastBlockText}>Вы можете написать нам в telegram с любым вопросом и мы непременно на него ответим)</div>
        </div>
      </div>
    </>
  );
};

export default Index;