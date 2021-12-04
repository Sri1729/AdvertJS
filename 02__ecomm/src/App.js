import "./App.css";
import { Cart } from "./components/Cart";
import { Menu } from "./components/Menu";
import React from "react";
import { MenuProvider } from "./components/ContextProvider";

function App() {
  return (
    <MenuProvider>
      <div className="AppWrapper">
        <div className="App">
          <Menu />
          <Cart />
        </div>
      </div>
    </MenuProvider>
  );
}

export default App;
