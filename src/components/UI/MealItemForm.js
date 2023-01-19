import { useRef, useState } from "react";
import Input from "./Input";
import classes from "./MealsItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandlerForm = (event) => {
    event.preventDefault();
    const enterredAmount = amountInputRef.current.value;
    const enterredAmountNumber = +enterredAmount;

    if (
      enterredAmount.trim().length === 0 ||
      enterredAmountNumber < 1 ||
      enterredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enterredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandlerForm}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          steps: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
