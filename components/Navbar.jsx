import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const Navbar = () => {
  const cartValue = useSelector((state) => state.cart.cartValue);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/img/telephone.png"
            alt="telephone"
            width={32}
            height={32}
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 768</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Link href="/" passHref>
            <Image
              src="/img/logo.png"
              alt="Peedluk Pizza"
              width="160px"
              height="69px"
              className={styles.mainLogo}
            />
          </Link>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <a href="#footer">
            <li className={styles.listItem}>Contact</li>
          </a>
        </ul>
      </div>
      <Link href="/cart">
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="cart" width="30" height="30" />
            <div className={styles.counter}>{cartValue}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
