import FrenchFries from "../images/plate__french-fries.png";
import Salmon from "../images/plate__salmon-vegetables.png";
import Spaghetti from "../images/plate__spaghetti-meat-sauce.png";
import Bacon from "../images/plate__bacon-eggs.png";
import Chicken from "../images/plate__chicken-salad.png";
import Fish from "../images/plate__fish-sticks-fries.png";

export const menuItems = [
  {
    id: 0,
    name: "French Fries with Ketchup",
    price: 223,
    image: FrenchFries,
    alt: "French Fries",
    count: 0,
  },
  {
    id: 1,
    name: "Salmon and Vegetables",
    price: 512,
    image: Salmon,
    alt: "Salmon and Vegetables",
    count: 0,
  },
  {
    id: 2,
    name: "Spaghetti Meat Sauce",
    price: 782,
    image: Spaghetti,
    alt: "Spaghetti with Meat Sauce",
    count: 0,
  },
  {
    id: 3,
    name: "Bacon, Eggs, and Toast",
    price: 599,
    image: Bacon,
    alt: "Bacon, Eggs, and Toast",
    count: 0,
  },
  {
    id: 4,
    name: "Chicken Salad with Parmesan",
    price: 698,
    image: Chicken,
    alt: "Chicken Salad with Parmesan",
    count: 0,
  },
  {
    id: 5,
    name: "Fish Sticks and Fries",
    price: 634,
    image: Fish,
    alt: "Fish Sticks and Fries",
    count: 0,
  },
];

export const getPrice = (item) => {
  return item / 100;
};

export const getCart = (list) => {
  return list.filter((item) => item.count > 0);
};
