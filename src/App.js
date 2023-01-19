import React, {Fragment, useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cart-provider";

function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const ModalHandler = () => {
    if (modalIsOpen){
      console.log("clicked open")
      return setModalIsOpen(false);
    }
    console.log("clicked close")
    setModalIsOpen(true);
  }



  return (
    <div>
      <CartProvider>
        {modalIsOpen && <Cart onClose={ModalHandler} onCloseBackdrop={ModalHandler}/>}
        <Header onOpen={ModalHandler}/>
        <main>
          <Meals/>
        </main>
      </CartProvider>
    </div>
  );
}

export default App;
