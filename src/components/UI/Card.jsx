import PropTypes from "prop-types";
import classes from "./Card.module.css";
function Card({ children }) {
  return <div className={classes.card}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.element,
};

export default Card;
