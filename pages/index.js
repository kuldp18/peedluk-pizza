import axios from 'axios';
import { API } from '../backend';
import Head from 'next/head';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
import styles from '../styles/Home.module.css';

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Peedluk Pizza</title>
        <meta name="description" content="Best Pizza's in Ahmedabad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get(`${API}/products`);
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
