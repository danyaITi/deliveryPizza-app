import React, { ChangeEvent, useCallback, useRef, useState } from "react";
import debounce from "lodash.debounce";
import styles from "../Input/Input.module.scss";
import img5 from "../../assets/img/delete.png";
import { useDispatch } from "react-redux";
import { setStateSearch } from "../../redux/filter/slice";

const Input: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const updateValue = useCallback(
    debounce((pizza:string) => {
      dispatch(setStateSearch(pizza));
    }, 350),
    []
  );

  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    updateValue(e.target.value);
  }

  function onClickClear() {
    inputRef.current?.focus();
    dispatch(setStateSearch(""));
    setValue("");
  }

  return (
    <div className={styles.absolute}>
      <div className={styles.box}>
        <input
          ref={inputRef}
          value={value}
          type="text"
          placeholder="Поиск..."
          onChange={onChangeInput}
        />
        {value && <img src={img5} alt="delete.img" onClick={onClickClear} />}
      </div>
    </div>
  );
};
export default Input;
