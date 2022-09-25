import './NavBar.css'
import '../CartWidget/CartWidget.js'
import CartWidget from '../CartWidget/CartWidget.js';

function NavBar() {
    return(
        <header>
            <nav className='NavBar'>
                <h1>Balder Clothing</h1>
                <ul>
                    <li>Shirts</li>
                    <li>Hoodies</li>
                    <li>Jackets & Coats</li>
                    <li>Joggings</li>
                    <li><CartWidget/></li>                    
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;