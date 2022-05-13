import { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Product.module.css';
import axios from 'axios';
import { API } from '../../backend';

const Product = ({ pizza }) => {
  const [size, setSize] = useState(0);
  const [extraPrice, setExtraPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);

  const getSizeType = () => {
    if (size === 0) return 'small';
    if (size === 1) return 'medium';
    return 'large';
  };

  const handleCheckbox = (e, option) => {
    const checked = e.target.checked;
    const price = option.price;

    if (checked) {
      setExtraPrice(extraPrice + price);
      setExtras((prev) => [...prev, option]);
    } else {
      setExtraPrice(extraPrice - price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image alt="" src={pizza.img} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>
          {pizza.title} ({getSizeType()})
        </h1>
        <span className={styles.price}>
          $ {pizza.prices[size] + extraPrice}
        </span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image alt="" src="/img/size.png" layout="fill" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image alt="" src="/img/size.png" layout="fill" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image alt="" src="/img/size.png" layout="fill" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((extraOption) => {
            return (
              <div className={styles.option} key={extraOption._id}>
                <input
                  type="checkbox"
                  name={extraOption.text}
                  id={extraOption.text}
                  className={styles.checkbox}
                  onChange={(e) => handleCheckbox(e, extraOption)}
                />
                <label htmlFor={extraOption.text}>{extraOption.text}</label>
              </div>
            );
          })}
        </div>
        <div className={styles.add}>
          <input
            type="number"
            name="quantity"
            id="quantity"
            defaultValue={1}
            className={styles.quantity}
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`${API}/products/${params.id}`);
  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;
