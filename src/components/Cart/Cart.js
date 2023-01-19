import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCTX = useContext(CartContext);
  const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;
  const hasItems = cartCTX.items.length > 0;

  const [itemAmount, setItemAmount] = useState();

  const removeCartItemhandler = (id) => {
    cartCTX.removeItem(id);
  };

  const AddCartItemhandler = (item) => {
    cartCTX.addItem({...item, amount: 1});
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCTX.items.map((cartItem) => {
        return (
          <CartItem
            key={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            amount={cartItem.amount}
            onRemove={removeCartItemhandler.bind(null, cartItem.id)}
            onAdd={AddCartItemhandler.bind(null, cartItem)}
          ></CartItem>
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onCloseBackdrop}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount </span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
