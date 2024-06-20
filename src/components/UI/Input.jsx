import PropTypes from "prop-types";
import classes from "./Input.module.css";
import React from "react";
// eslint-disable-next-line react/display-name
const Input = React.forwardRef(({ input, label }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
})

Input.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
};

export default Input;
