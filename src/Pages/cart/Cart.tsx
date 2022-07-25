import React from "react";
import styles from "./Cart.module.scss";
import img from "../../assets/img/cart.svg";
import img2 from "../../assets/img/trash.svg";
import PizzaBlock from "./pizzaBlock/PizzaBlock";
import { useSelector, useDispatch } from "react-redux";
import EmptyCart from "./emptyCart/EmptyCart";
import { setRemoveAll } from "../../redux/cart/slice";
import { selectCart } from "../../redux/cart/selectors"
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const pizzaItem = useSelector(selectCart);
  const totalPricePizza = pizzaItem.reduce(
    (sum: number, item: any) => item.price * item.count + sum,
    0
  );
  const totalCountPizza = pizzaItem.reduce(
    (sum: number, item: any) => item.count + sum,
    0
  );

  if (!totalPricePizza) {
    return <EmptyCart />;
  }

  function removeAll() {
    dispatch(setRemoveAll());
  }
  return (
    <div className={styles.cart}>
      <div className={styles.top}>
        <div className={styles.first}>
          <img src={img} alt="cart.svg" />
          <span className={styles.title}>Корзина</span>
        </div>
        <div className={styles.second}>
          <img src={img2} alt="" />
          <span onClick={removeAll}>Очистить корзину</span>
        </div>
      </div>
      {pizzaItem.map((obj: any) => (
        <PizzaBlock {...obj} key={obj.id} />
      ))}

      <div className={styles.bottom}>
        <div className={styles.thrid}>
          Всего пицц: <b>{totalCountPizza}шт.</b>
        </div>
        <div className={styles.fourth}>
          Сумма заказа:
          <b>{totalPricePizza}р</b>
        </div>
      </div>
      <div className={styles.btns}>
        <Link to="/">
          <button className={styles.one}> вернуться назад </button>
        </Link>
        <button className={styles.two}>Оплатить сейчас</button>
      </div>
    </div>
  );
}
export default Cart;