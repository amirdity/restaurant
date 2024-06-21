import PropTypes from "prop-types";
import CartContext from "./cart-context";
import { useReducer } from "react";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
function cartReducer(state, action) {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // conCat will create a new array
    // const existingCartItemIndex = state.items.findIndex()
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedItems;
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: state.items[existingCartItemIndex].amount + action.item.amount,
      };
      updatedItems = [...state.items];
      state.items[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    return {};
  }
  return defaultCartState;
}
function CartProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  function addItemCartHandler(item) {
    dispatchCartAction({ type: "ADD", item: item });
  }
  function removeItemFromCartHandler(id) {
    dispatchCartAction({ type: "REMOVE", id: id });
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.array,
};

export default CartProvider;
