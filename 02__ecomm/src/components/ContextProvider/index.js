import React, { useState, createContext } from "react";
import { menuItems } from "../../constants";

export const MenuContext = createContext();

export const MenuProvider = (props) => {
  const [menu, setMenu] = useState(menuItems);

  const onAddToCart = (index) => {
    let tempMenu = menu;
    tempMenu[index].count = 1;
    setMenu([...tempMenu]);
  };

  const cartItems = () => {
    return menu.filter((item) => item.count > 0);
  };

  const onIncreaseQnt = (index) => {
    let tempMenu = menu;
    tempMenu[index].count = menu[index].count + 1;
    setMenu([...tempMenu]);
  };

  const onDecreaseQnt = (index) => {
    if (menu[index].count === 1) {
      // eslint-disable-next-line no-restricted-globals
      var x = confirm("Do you want to remove this item");
      if (x) {
        let tempMenu = menu;
        tempMenu[index].count = menu[index].count - 1;
        setMenu([...tempMenu]);
      }
    } else {
      let tempMenu = menu;
      tempMenu[index].count = menu[index].count - 1;
      setMenu([...tempMenu]);
    }
  };

  const getSubTotalPrice = () => {
    var sum = 0;
    menu.forEach((item) => {
      if (item.count > 0) {
        sum += item.count * (item.price / 100);
      }
    });
    return sum.toFixed(2);
  };

  const getTaxPrice = () => {
    return (0.0975 * getSubTotalPrice()).toFixed(2);
  };

  const getTotalPrice = () => {
    return (1.0975 * getSubTotalPrice()).toFixed(2);
  };

  return (
    <MenuContext.Provider
      value={{
        menu,
        addToCart: onAddToCart,
        cartItems,
        onIncreaseQnt,
        onDecreaseQnt,
        getSubTotalPrice,
        getTaxPrice,
        getTotalPrice,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};
