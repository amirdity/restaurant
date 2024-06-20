import PropTypes from "prop-types";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
function MealItemForm(props) {
  return (
    <form className={classes.form} onSubmit={() => {}}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
}

MealItemForm.propTypes = {};

export default MealItemForm;
