import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import Button from "../Button/Button";
import './CartView.css';

function CartView() {
  const { cart, removeItem, clearCart, getTotalPrice, getTotalItemCount } = useContext(cartContext);
  console.log(cart);

  return (
    <div className="cartContainer">
        <div class="cart boxBorder">
            <h3 class="boxBorder" >Cart</h3>
            <div class="cart-header">
                <div class="column1">Item</div>
                <div class="column1">Unit price</div>
            </div>
            <div class="cart-items">
                {cart.map((item) => (
                    <div class="cart-item">
                        <div class="item-info" onClick={removeItem}>
                            <img src={process.env.PUBLIC_URL + item.img} alt={item.title} />
                            <h4>{item.title}</h4>
                        </div>
                        <div class="unit-price">
                            ${item.price}
                        </div>
                    </div>
                ))}
            </div>
            <div class="cart-footer">
                <div class="subtotal">
                    Subtotal ({getTotalItemCount()} items): ${getTotalPrice()}
                </div>
                <div class="checkout">
                    <div class="add-to-cart">
                    <button class="btn glow-on-hover" onClick={clearCart}>Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
  );
}


/*
<div className="itemCartContainer">
            {cart.map((item) => (
            <div className="itemContainer">
                <div className="">
                    <img src={process.env.PUBLIC_URL + item.img} alt={item.title} />
                </div>
                <div className="detail-container">
                    <h2>{item.title}</h2>
                    <h4>${item.price}</h4>
                    <h4>{item.count}</h4>
                    <h4>Precio Total: ${item.price * item.count}</h4>
                    <Button onClick={removeItem}>Remove</Button>
                </div>
            </div>
            ))}
            <div className='totalAPagar'>
                <h4>Total a pagar:</h4>
                <h2>s/. {getTotalPrice()}</h2>
            </div>
        </div>
        <div className='totalAPagar'>
            <h4>Total a pagar:</h4>
            <h2>s/. {getTotalPrice()}</h2>
        </div>
*/

/*
{cart.map((item) => (
        <div>
          <h2>{item.title}</h2>
          <h4>${item.price}</h4>
          <h4>{item.count}</h4>
          <h4>Precio Total: ${item.price * item.count}</h4>
          <button onClick={removeItem}>Clear Cart</button>
        </div>
      ))}
*/

export default CartView;
