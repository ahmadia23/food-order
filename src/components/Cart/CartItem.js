import classes from "./CartItem.module.css";
import React from "react";

const CartItem = ((props) => {
  return (
    <li className={classes.CartItem}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <div className={classes.price}>{props.price}</div>
          <div className={classes.amount}>x {props.amount}</div>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
});

export default CartItem;
