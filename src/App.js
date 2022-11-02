import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartView from "./components/CartView/CartView";

function App() {
  return (
      <div className="App">
        <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="Wlcome to Balder Clothing"/>} />
              <Route path="/category/:categoryID" element={<ItemListContainer />} />
              <Route path="/item/:itemID" element={<ItemDetailContainer />}></Route>
              <Route path="/cart" element={<CartView/>}></Route>
              <Route path="*" element={<h4>You are lost! Error: 404</h4>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </div>
  );
}

export default App;