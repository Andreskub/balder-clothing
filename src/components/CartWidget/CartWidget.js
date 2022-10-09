import "./CartWidget.css";

const CartWidget = () => {
    return (
        <img src={process.env.PUBLIC_URL + '/assets/add-to-cart.png'} className="CartWidget" alt="cart" />
    )
}

export default CartWidget;