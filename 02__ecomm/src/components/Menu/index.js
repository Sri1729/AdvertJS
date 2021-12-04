import React, { useContext } from "react";
import { MenuContext } from "../ContextProvider";
import { getPrice } from "../../constants";
import { MenuItem } from "../MenuItem";
import styles from "./styles.module.css";

export const Menu = () => {
  const { menu, addToCart } = useContext(MenuContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>To Go Menu</h1>

      <ul className={styles.menuListContainer}>
        {menu.map((item) => (
          <li key={`${item.id}item`} className={styles.menuListItem}>
            <MenuItem
              name={item.name}
              price={getPrice(item.price)}
              inCart={item.count !== 0}
              icon={item.image}
              altName={item.alt}
              onAddToCart={() => {
                if (item.count === 0) {
                  addToCart(item.id);
                }
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
