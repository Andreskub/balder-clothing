import "./CartWidget.css";
import { useContext } from 'react';
import { cartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';

function CartWidget() {

    const { getTotalItemCount } = useContext(cartContext);

    return (
        <a href="/cart">
            <img src={process.env.PUBLIC_URL + '/assets/add-to-cart.png'} className="CartWidget" alt="cart" />
            <span>{getTotalItemCount() > 0 && getTotalItemCount()}</span>
        </a>
    );
    
}

    /*
    return (
        <img src={process.env.PUBLIC_URL + '/assets/add-to-cart.png'} className="CartWidget" alt="cart" />
    )*/

export default CartWidget;