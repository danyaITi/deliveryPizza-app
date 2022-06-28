import React, { useEffect, useRef, useState } from "react";
import styles from "./sort.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSort
} from "../../redux/filter/selectors";
import { setStateItem } from "../../redux/filter/slice"
import {
  Item,
  SortPropertyEnum
} from "../../redux/filter/types";


export const sortItemsName: Item[] = [
  { name: "популярности", sortProperty: SortPropertyEnum.RATING },
  // { name: "популярности(asc)", sortProperty: "-rating" },
  { name: "цене", sortProperty: SortPropertyEnum.PRICE },
  // { name: "цене(asc)", sortProperty: "-price" },
  { name: "названию", sortProperty: SortPropertyEnum.TITLE }
  // { name: "названию(asc)", sortProperty: "-title" }
];

type OutsideCkick = MouseEvent & {
  path: Node[];
};

const Sort: React.FC = React.memo(() => {
  const sortRef = useRef<HTMLDivElement>(null);
  const selected = useSelector(selectSort);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  function funcItemName(obj: { name: string; sortProperty: SortPropertyEnum }) {
    dispatch(setStateItem(obj));
    setOpen(false);
  }

  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      const ev = event as OutsideCkick;
      if (sortRef.current && !ev.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", clickOutside);

    return () => {
      document.body.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <div className={styles.box} ref={sortRef}>
      <p>
        Сортировка по:{" "}
        <span onClick={() => setOpen(!open)}>{selected.name}</span>
      </p>
      {open && (
        <ul className={styles.lists}>
          {sortItemsName.map((obj, i) => (
            <li onClick={() => funcItemName(obj)} key={i}>
              {obj.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
})
export default Sort;
