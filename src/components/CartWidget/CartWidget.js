import "./CartWidget.css";
import { useContext } from 'react';
import { cartContext } from "../../context/CartContext";

function CartWidget() {
    const { getTotalItemCount } = useContext(cartContext);

    return (
        <li href="/cart">
            <div className="cart-widget-container">
                <img src={process.env.PUBLIC_URL + '/assets/add-to-cart.png'} className="cart-widget" alt="cart" />
                <span>{getTotalItemCount() > 0 && getTotalItemCount()}</span>
            </div>
        </li>
    );   
}

export default CartWidget;