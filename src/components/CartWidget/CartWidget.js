import "./CartWidget.css";
import cartImg from '../../assets/add-to-basket.png'

const CartWidget = () => {
    return (
        <img src={cartImg} className="CartWidget" alt="cart" />
    )
}

export default CartWidget;