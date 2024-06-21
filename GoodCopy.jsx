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
    // in this phase , i am adding a new item to the items array
    // now i should check the id of items is repetitive or not
    //by useing findIndex() i will know the ansewr
    // if the answer was -1 it means that id is not repeated
    // and returns undifiend

    // action is not added yet we are checking is id repeated or not ?
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // if the id is exist , now i have access to that object inside
    //of that array and this is an object
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        // object
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      // this will be triged updateing correctly
      // widoth it ... it will be duplicated
      updatedItems = [...state.items];

      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // conCat will create a new array
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
