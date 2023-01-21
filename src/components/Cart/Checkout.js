import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-input";
import { useState } from "react";

const Checkout = (props) => {

  const [formInvalid, setFormInvalid] = useState(false);

  const nameValidate = (name) => {
    return name.trim() !== "";
  }

  const {
    inputValue: name,
    hasError: inputNameError,
    inputIsValid: nameValid,
    valueIsTouched: nameTouched,
    inputBlurHandler: nameFieldBlur,
    inputValueHandler: nameInputHandler,
    reset: resetName,
  } = useInput(nameValidate);

  const confirmHandler = (event) => {
    event.preventDefault();
    if (!nameValid){
      setFormInvalid(true);
      return;
    }
    resetName();
  };

  const nameFieldClass =  inputNameError ? classes.control.invalid : classes.control
  console.log(nameTouched);



  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" className={nameFieldClass} value={name} onChange={nameInputHandler} onBlur={nameFieldBlur}/>
        {inputNameError ? <p className={classes.error}>Name field can't be blanked</p> : ""}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
