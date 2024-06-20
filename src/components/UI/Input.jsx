import PropTypes from "prop-types";
import classes from "./Input.module.css";
function Input({ input, label }) {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
}

Input.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
};

export default Input;
