import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';
const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Best Pizza in Town!</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et placeat
        neque nam mollitia eum, repudiandae quis consequatur repellat aspernatur
        amet.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
