import PropTypes from "prop-types";
import CartContext from "./cart-context";

function CartProvider({ children }) {
  function addItemCartHandler(item) {
    console.log(item)
  }
  function removeItemFromCartHandler(id) {
    console.log(id)
  }
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.element,
};

export default CartProvider;
