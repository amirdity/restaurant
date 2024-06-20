import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./context/CartProvider";
function App() {
  const [cartIsShow, setCarIsShow] = useState(false);
  function showCartHandler() {
    setCarIsShow(true);
  }
  function hideCartHandler() {
    setCarIsShow(false);
  }
  return (
    <CartProvider>
      {cartIsShow && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
