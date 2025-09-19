import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/cgvSignup.css';
import './styles/commons.css';
import './styles/cgv.css';
import './styles/shoppy.css';
import { Layout } from './pages/Layout.jsx';
import { Home } from './pages/Home.jsx';
import { Products } from './pages/Products.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { ProductDetail } from './pages/ProductDetail.jsx';
import { Cart } from './pages/Cart.jsx';
import { useState } from 'react';
import { cartItemsCheck } from './utils/cart.js';

export default function App() {
  //1. 장바구니 수량 관리 : setCartCount
  const [cartCount, setCartCount] = useState(0);

  //2. 장바구니 아이템 관리
  const [cartItems, setCartItems] = useState([]); //[{cartItem}, {...}]

  const addCart = (addItem) => {
    const updatedCartItems = cartItemsCheck(cartItems, addItem);

    setCartItems(updatedCartItems);
    //장바구니 카운트는 전체 수량 기준으로 증가
    setCartCount(cartCount + 1);
  }

  console.log(cartItems, cartCount);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout cartCount={cartCount} />}>
          <Route index element={<Home />} />
          <Route path='/all' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products/:pid' element={<ProductDetail addCart={addCart} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

