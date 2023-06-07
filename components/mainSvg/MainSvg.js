import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './MainSvg.module.css';
import FirstPart from '../../assets/mainSvg/first-part.png';
import SecondPart from '../../assets/mainSvg/second-part.png';
import Left from '../../assets/mainSvg/left.png';
import Right from '../../assets/mainSvg/right.png';
import ShadowTitle from '../../assets/mainSvg/ShadowTitle';

const MainSvg = () => {
  return (
    <div className={styles.container}>
      <Image
        src={FirstPart}
        width={756}
        height={'auto'}
        alt="Main image"
        className={styles.firstPartImage}
      />
      <div className={styles.secondPartImageBlock}>
        <Image
          src={SecondPart}
          width={1920}
          height={'auto'}
          alt="Main image"
          className={styles.secondPartImage}
        />
        <Image
          src={Left}
          width={383}
          height={'auto'}
          alt="Main image"
          className={styles.leftPartImage}
        />
        <Image
          src={Right}
          width={634}
          height={'auto'}
          alt="Main image"
          className={styles.rightPartImage}
        />
      </div>
      <div className={styles.imageTitle} >
        <Link href='/shadow' >
          <ShadowTitle />
        </Link>
        <div className={styles.mainText}>
        Новая коллекция <br/>
        наверяна азиатскими мотивами. <br/> 
        В ней отражены «инь» и «янь», выражающиеся 
        в огне и тьме, их постоянной борьбе. Мы создали 
        три уникальных образа и дополнили их стильными 
        аксуссуарами. Образы получились современными 
        экстравагантными и стильными 
      </div>
      </div>
   </div>
  );
};

export default MainSvg;