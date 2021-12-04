import React from "react";
import styles from "./styles.module.css";
import CheckIocn from "../../images/check.svg";

export const MenuItem = ({
  icon,
  altName,
  name,
  price,
  inCart,
  onAddToCart,
}) => {
  return (
    <>
      <div className={styles.plate}>
        <img src={icon} alt={altName} className={styles.plate} />
      </div>
      <div className={styles.content}>
        <p className={styles.menuItem}>{name}</p>
        <p className={styles.price}>$ {price}</p>
        <button
          onClick={onAddToCart}
          className={!inCart ? styles.cartButton : styles.inCart}
        >
          {inCart ? (
            <>
              <img
                src={CheckIocn}
                style={{ marginRight: "10px" }}
                alt="Check"
                height="10px"
                width="10px"
              />
              In Cart
            </>
          ) : (
            "Add To Cart"
          )}
        </button>
      </div>
    </>
  );
};
