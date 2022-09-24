import NavBar from './components/NavBar'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <body>
        Balder Shoes
        <img src={logo} className="App-logo" alt="logo" />
      </body>
    </div>
  );
}

export default App;