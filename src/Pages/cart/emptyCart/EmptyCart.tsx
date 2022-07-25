import React from "react";
import { Link } from "react-router-dom";
import img from "../../../../assets/img/cartEmpty.svg";
import styles from "./EmptyCart.module.scss";

const EmptyCart: React.FC = () => {
  
  return (
    <div className={styles.abs}>
      <div>
        <b>Корзина пустая :(</b>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
      <Link to="/">
        <div>
          <button>Назад</button>
        </div>
      </Link>
    </div>
  );
};
export default EmptyCart;