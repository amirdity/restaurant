import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
function App() {
  const [cartIsShow, setCarIsShow] = useState(false);
  function showCartHandler() {
    setCarIsShow(true);
  }
  function hideCartHandler() {
    setCarIsShow(false);
  }
  return (
    <>
      {cartIsShow && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
