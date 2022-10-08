import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Balder Clothing"/>} />
            <Route path="/category/:categoryID" element={<ItemListContainer />} />
            <Route path="/item/:itemID" element={<ItemDetailContainer />}></Route>
            <Route path="*" element={<h4>Te perdiste! Error: 404</h4>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;