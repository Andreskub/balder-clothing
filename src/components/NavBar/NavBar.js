import './NavBar.css'
import '../CartWidget/CartWidget.js'
import CartWidget from '../CartWidget/CartWidget.js';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from "../../context/CartContext";

function NavBar() {

    const {cart} = useContext(cartContext);

    return(
        <header>
            <nav className='nav-bar'>
                <Link to="/"><h1>Balder Clothing</h1></Link>
                <ul className="nav-menu">
                    <Link to="/category/shirts"><li>Shirts</li></Link>
                    <Link to="/category/hoodies"><li>Hoodies</li></Link>
                    <Link to="/category/jackets&coats"><li>Jackets & Coats</li></Link>
                    <Link to="/cart"><CartWidget/></Link>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;