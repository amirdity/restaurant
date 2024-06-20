import PropTypes from "prop-types";
import classes from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";
function HeaderCartButton({ onClick }) {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.bump}>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

HeaderCartButton.propTypes = {
  onClick: PropTypes.func,
};

export default HeaderCartButton;
