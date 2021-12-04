import React, { useContext } from "react";
import { MenuContext } from "../ContextProvider";
import { getPrice } from "../../constants";
import { CartItem } from "../CartItem";
import styles from "./styles.module.css";

export const Cart = () => {
  const {
    cartItems,
    onIncreaseQnt,
    onDecreaseQnt,
    getSubTotalPrice,
    getTaxPrice,
    getTotalPrice,
  } = useContext(MenuContext);
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Your Cart</h1>

        {cartItems().length === 0 ? (
          <p className={styles.empty}>Your cart is empty.</p>
        ) : (
          <>
            <ul className={styles.cartSummary}>
              {cartItems().map((item) => (
                <li>
                  <CartItem
                    altName={item.alt}
                    image={item.image}
                    name={item.name}
                    price={getPrice(item.price)}
                    quantity={item.count}
                    onIncrease={() => onIncreaseQnt(item.id)}
                    onDecrease={() => onDecreaseQnt(item.id)}
                  />
                </li>
              ))}
            </ul>
            <div className={styles.totals}>
              <div className={styles.lineItem}>
                <div className={styles.label}>Subtotal:</div>
                <div className={`${styles.amount} ${styles.price}`}>
                  ${getSubTotalPrice()}
                </div>
              </div>
              <div className={styles.lineItem}>
                <div className={styles.label}>Tax:</div>
                <div className={`${styles.amount} ${styles.price}`}>
                  ${getTaxPrice()}
                </div>
              </div>
              <div className={styles.lineItem}>
                <div className={styles.label}>Total:</div>
                <div className={styles.totalPrice}>${getTotalPrice()}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
