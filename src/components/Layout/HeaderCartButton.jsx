import PropTypes from "prop-types";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../context/cart-context";
function HeaderCartButton({ onClick }) {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  // let total = 0;
  // cartCtx.items.map((item) => {
  //   return (total += item.amount);
  // });
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.bump}>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

HeaderCartButton.propTypes = {
  onClick: PropTypes.func,
};

export default HeaderCartButton;
