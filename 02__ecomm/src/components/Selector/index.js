import React from "react";
import styles from "./styles.module.css";
import Chevron from "../../images/chevron.svg";

export const Selector = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className={styles.quantityWrapper}>
      <button onClick={onDecrease} className={styles.decrease}>
        <img src={Chevron} alt="decrease" height="10px" width="10px" />
      </button>
      <div className={styles.quantity}>{quantity}</div>
      <button onClick={onIncrease} className={styles.increase}>
        <img src={Chevron} alt="increase" height="10px" width="10px" />
      </button>
    </div>
  );
};
