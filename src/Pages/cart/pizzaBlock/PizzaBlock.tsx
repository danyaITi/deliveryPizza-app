import React from "react";
import styles from "./PizzaBlock.module.scss";
import img3 from "../../../../assets/img/delete.png";
import { useDispatch } from "react-redux";
import {
  setStatePizzas,
  minusPizza,
  setDeletePizza
} from "../../../redux/cart/slice";
import {Pizza} from "../../../redux/cart/types";

type PizzaBlockProps = {
  img: string;
  id: number;
  size: number;
  type: string;
  title: string;
  count: number;
};

const PizzaBlock: React.FC<PizzaBlockProps> = ({
  img,
  id,
  size,
  type,
  title,
  count
}) => {
  const dispatch = useDispatch();

  function plusPizza() {
    dispatch(setStatePizzas({ id } as Pizza));
  }
  function minus() {
    dispatch(minusPizza(id));
    if (count <= 1) {
      dispatch(setDeletePizza(id));
    }
  }
  function deletePizza() {
    dispatch(setDeletePizza(id));
  }

  return (
    <div className={styles.pizza}>
      <div className={styles.first}>
        <div>
          <img src={img} alt="" />
        </div>
        <div style={{ width: "200px" }}>
          <b className={styles.title}>{title}</b>
          <div className={styles.params}>
            {type},{size}см
          </div>
        </div>
      </div>
      <div className={styles.second}>
        <button onClick={minus} disabled={count === 1}>-</button>
        <span>{count}</span>
        <button onClick={plusPizza}>+</button>
      </div>
      <div className={styles.thrid}>
        <img src={img3} alt="deletePizza.jpg" onClick={deletePizza} />
      </div>
    </div>
  );
}
export default PizzaBlock;