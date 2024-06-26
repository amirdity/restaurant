import PropTypes from "prop-types";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem.jsx";
function Cart({ onHideCart }) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  // i didnt use hooks but this variable works as useState because whene it renders it cant be rerenders and it renders just once

  const hasItems = cartCtx.items.length > 0;
  function cartItemRemoveHandler(id) {}
  function cartItemAddHandler(item) {}
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  // const cartItems = (
  //   <ul className={classes["cart-items"]}>
  //     {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
  //       <li key={item.id}>{item.name}</li>
  //     ))}
  //   </ul>
  // );
  return (
    <Modal onClose={onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

Cart.propTypes = {
  onHideCart: PropTypes.func,
};

export default Cart;
