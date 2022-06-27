import React, { useState } from "react";
import styles from "../pizzasBlock/pizzasBlock.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {  setStatePizzas } from "../../redux/cart/slice"
import {  selectById } from "../../redux/cart/selectors"
import { Pizza } from "../../redux/cart/types"

type PizzasBlockProps = {
  id: number;
  title: string;
  img: string;
  size: number[];
  price: number;
  type: number[];

};

const PizzasBlock: React.FC<PizzasBlockProps> = ({
  id,
  title,
  img,
  size,
  price,
  type
}) => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectById(id));
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const typeNames = ['тонкое', 'традиционное'];
 

  const addedCount = itemCount ? itemCount.count : 0;

  function addPizza() {
    const pizzaObj: Pizza = {
      id,
      title,
      img,
      price,
      size: activeSize,
      type: typeNames[activeType],
      count: 0
    };
    dispatch(setStatePizzas(pizzaObj));
  }

  return (
    <div className={styles.flex}>
      <div className={styles.second}>
        <img src={img} alt="pizza" />
        <h3>{title}</h3>
        <div className={styles.params}>
          <ul>
            {type.map((typeId) => (
              <li
                onClick={() => setActiveType(typeId)}
                className={activeType === typeId ? styles.type : ""}
                key={typeId}
              >
                {typeNames[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {size.map((value, id) => (
              <li
                onClick={() => setActiveSize(value)}
                className={activeSize === value ? styles.size : ""}
                key={id}
              >
                {value}см.
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.thrid}>
          <div>
            <p className={styles.price}>от {price}руб</p>
          </div>
          <div className={styles.btn}>
            <button onClick={addPizza}>
              {addedCount > 0 && <i>{itemCount?.count}</i>}
              +Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PizzasBlock;
