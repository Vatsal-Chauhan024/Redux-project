import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/cart' element= {<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
