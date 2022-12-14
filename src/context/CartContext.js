import { createContext, useState } from "react";

const cartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(item, count) {
    let newCart = [...cart];
    let newItem = { ...item, count };
    newCart.push(newItem);
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }

  function removeItem(idToRemove) {
    let newCart = cart.filter((itemInCart) => itemInCart.id !== idToRemove);
    setCart(newCart);
  }

  function getTotalPrice() {
    let total = 0;
    cart.forEach((e) => total += (e.count * e.price));
    return total;
  }

  function getTotalItemCount() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total = total + itemInCart.count;
    });
    return total;
  }

  /* function isInCart()  -> Array.some */

  return (
    <>
      <cartContext.Provider value={{ cart, addToCart, getTotalItemCount, getTotalPrice, clearCart, removeItem }}>
        {props.children}
      </cartContext.Provider>
    </>
  );
}

export { cartContext, CartContextProvider };
