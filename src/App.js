import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/cart';
import Home from './pages/home';
import Header from './components/header/headerIndex';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/cart' element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;
