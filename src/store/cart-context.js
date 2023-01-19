import React, { createContext } from "react";

const CartContext = React.createContext({
  items: [{id: "1", name:"alloco", amount:2, price:12}],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});


export default CartContext;
