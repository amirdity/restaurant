// import PropTypes from "prop-types";
import classes from "./Header.module.css";
import mealsImage from "/assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicius food!" />
      </div>
    </>
  );
}

Header.propTypes = {};

export default Header;
