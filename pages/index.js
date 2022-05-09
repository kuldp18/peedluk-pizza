import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Peedluk Pizza</title>
        <meta name="description" content="Best Pizza's in Ahmedabad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      home page
      <Image src="/img/logo.png" alt="Peedluk Pizza" layout="fill" />
    </div>
  );
}
