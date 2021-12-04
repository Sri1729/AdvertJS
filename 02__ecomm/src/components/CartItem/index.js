import React from "react";
import { Selector } from "../Selector";
import styles from "./styles.module.css";

export const CartItem = ({
  image,
  altName,
  quantity,
  name,
  price,
  onIncrease,
  onDecrease,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.plate}>
          <img src={image} alt={altName} className={styles.plateImg} />
          <div className={styles.quantity}>{quantity}</div>
        </div>

        <div>
          <div>
            <p className={styles.menuItem}>{name}</p>
            <p className={styles.price}>${price}</p>
          </div>
          <div className={styles.info}>
            <Selector
              quantity={quantity}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
            <div className={styles.subtotal}>
              ${(price * quantity).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
