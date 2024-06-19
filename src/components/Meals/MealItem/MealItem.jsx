import PropTypes from "prop-types";
import classes from "./MealItem.module.css";
function MealItem({ name, description, price }) {
  const pricee = `$${price.toFixed(2)}`
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{pricee}</div>
      </div>
      <div></div>
    </li>
  );
}

MealItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default MealItem;
