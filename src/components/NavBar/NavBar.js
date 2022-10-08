import './NavBar.css'
import '../CartWidget/CartWidget.js'
import CartWidget from '../CartWidget/CartWidget.js';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <header>
            <nav className='nav-bar'>
                <Link to="/"><h1>Balder Clothing</h1></Link>
                <ul className="nav-menu">
                    <Link to="/category/shirts"><li>Shirts</li></Link>
                    <Link to="/category/hoodies"><li>Hoodies</li></Link>
                    <Link to="/category/jackets&coats"><li>Jackets & Coats</li></Link>
                    <CartWidget/>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;