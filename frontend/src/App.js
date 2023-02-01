import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Home from './Components/Home';
import Order from './Components/Order';
import Shipping from './Components/Shipping';



function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Home/>
      <Order/>
      <Shipping/>
    </div>
  );
}

export default App;
