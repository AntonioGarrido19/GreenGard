
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './components/ItemList/ItemList';
import Inicio from './components/Inicio/Inicio';
import NavBar from './components/NavBar/NavBar';
import ItemDetail from './components/ItemDetail/ItemDetail'
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  return (
   <BrowserRouter>
    <NavBar/>
   <Routes>
    <Route path="/" element={<Inicio />} />
   <Route path="/category/:categoryName" element={<Inicio />} />
   <Route path="detail/:id" element={<ItemDetail />} />
   <Route path="cart" element={<CartWidget />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;