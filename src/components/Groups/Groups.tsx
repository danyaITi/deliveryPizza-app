import React from "react";
import styles from "../Groups/Groups.module.scss";

type GroupsProps = {
  toggleIndex: (id:number) => void,
  activeIndex:number
}

const Groups: React.FC<GroupsProps> = React.memo(({toggleIndex, activeIndex}) => {
  
const categories = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые"];
  
  return (
    <ul className={styles.categories}>
      {categories.map((name, i) => (
        <li
          onClick={() => toggleIndex(i)}
          className={activeIndex === i ? styles.active : ""}
          key={i}
        >
          <h5>{name}</h5>
        </li>
      ))}
    </ul>
  );
})

export default Groups;