import React from "react";
import { Link } from "react-router-dom";
import styles from "../Header/Header.module.scss";
import img1 from "../../assets/img/logo.webp";
import img2 from "../../assets/img/icon.svg";
import Input from "../Input/Input";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cart/selectors"

const Header: React.FC = () => {

  const isMounted = React.useRef(false)
  const totalPizzas = useSelector(selectCart);
  const totalCount = totalPizzas.reduce((sum: number, pizza: any) => sum + pizza.count,0)
  
React.useEffect(() => {
  if(isMounted.current) {
    const pizza = JSON.stringify(totalPizzas)
    localStorage.setItem('Key', pizza)
  }
  isMounted.current = true
  },[totalPizzas])

  return (
    <div className={styles.first}>
      <Link to="/">
        <div>
          <img src={img1} alt="pizza.img" className={styles.logo} />
        </div>
      </Link>
      <Input />
      <Link to="/cart">
        <button className={styles.cart}>
          <span>{totalCount}</span>
          <img src={img2} alt="cart.img" />
        </button>
      </Link>
    </div>
  );
};
export default Header;