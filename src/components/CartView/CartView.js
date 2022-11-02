import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import Button from "../Button/Button";
import './CartView.css';

function CartView() {
  const { cart, removeItem, clearCart, getTotalPrice, getTotalItemCount } = useContext(cartContext);
  console.log(cart);

  return (
    <div className="cartContainer">
        <div className="cart boxBorder">
            <h3 className="cart-name boxBorder">Cart</h3>
            <div className="cart-header">
                <div className="column1">Item</div>
                <div className="column1">Unit price</div>
            </div>
            <div className="cart-items">
                {cart.map((item, index) => (
                    <div className="cart-item">
                        <div className="item-info">
                            <img className="item-info-elemnt" src={process.env.PUBLIC_URL + item.img} alt={item.title} />
                            <div className="item-info-elemnt">
                                <h3>{item.title}</h3>
                                <h4>{item.detail}</h4>
                            </div>    
                        </div>
                        <div className="unit-price"><p>${item.price}</p></div>
                        <button className="remove-btn-container" onClick={removeItem}>
                            <img className="remove-btn" src={process.env.PUBLIC_URL + '/assets/remove-from-cart.png'} alt='remove-from-cart' />
                        </button>
                    </div>
                ))}
            </div>
            <div className="cart-footer">
                Subtotal ({getTotalItemCount()} items): ${getTotalPrice()}
                <button className="btn glow-on-hover" onClick={clearCart}>Proceed to checkout</button>
            </div>
        </div>
    </div>
        
  );
}

export default CartView;
