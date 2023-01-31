import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Home from './Components/Home';
import Product from './Components/Product';



function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Home/>
      <Product/>
    </div>
  );
}

export default App;
