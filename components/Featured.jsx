import { useState } from 'react';
import styles from '../styles/Featured.module.css';
import Image from 'next/image';

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    '/img/featured.png',
    '/img/featured2.png',
    '/img/featured3.png',
  ];

  const handleArrow = (dir) => {
    if (dir === 'l') {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (dir === 'r') {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  console.log(index);

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{
          left: 0,
        }}
        onClick={() => handleArrow('l')}
      >
        <Image
          src="/img/arrowl.png"
          alt="arrow left"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={styles.wrapper}
        style={{
          transform: `translateX(${-100 * index}vw)`,
        }}
      >
        <div className={styles.imgContainer}>
          <Image
            src="/img/featured.png"
            layout="fill"
            alt=""
            objectFit="contain"
          />
          ;
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/img/featured2.png"
            layout="fill"
            alt=""
            objectFit="contain"
          />
          ;
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/img/featured3.png"
            layout="fill"
            alt=""
            objectFit="contain"
          />
          ;
        </div>
      </div>
      <div
        className={styles.arrowContainer}
        style={{
          right: 0,
        }}
        onClick={() => handleArrow('r')}
      >
        <Image
          src="/img/arrowr.png"
          alt="arrow right"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Featured;
