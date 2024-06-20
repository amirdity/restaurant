import PropTypes from "prop-types";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../context/cart-context";
function MealItem({ name, description, price, id }) {
  const cartCtx = useContext(CartContext)
  const pricee = `$${price.toFixed(2)}`
  function addToCartHandler(amount) {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price
    })
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{pricee}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

MealItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
};

export default MealItem;
