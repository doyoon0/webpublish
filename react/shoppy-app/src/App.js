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
import { cartItemsCheck, updateCartItemsQty } from './utils/cart.js';

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

  //장바구니 아이콘 위 수량변경
  const updateCart = (cid, type) => {
    if (type === undefined) {
      const findItem = cartItems.find(item => item.cid === cid); //타입이 undefined 일때, 해당 아이템을 검색
      setCartCount(cartCount - findItem.qty); //type을 안넘기면 remove로 정했음. 해당 아이템의 모든 qty를 -한다.

      // setCartItems((cartItems) => {
      //   return cartItems.filter(item => !(item.cid === cid));
      // }); //카트 아이템 다시 재정렬 하는것인데 이거 왜있지...  주석처리해도 동일하게 작동함!! Cart.js에 이미 있음.

    } else { //type이 있는경우 +/-
      setCartItems(updateCartItemsQty(cartItems, cid, type)); //장바구니 해당아이템 개별 수량변경
      type === "+" ? 
        setCartCount(cartCount + 1) : 
        cartCount > 0 ?
          setCartCount(cartCount -1) : setCartCount(cartCount);
    }
  }

  // console.log("cartItems-------->", cartItems);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout cartCount={cartCount} />}>
          <Route index element={<Home />} />
          <Route path='/all' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart items={cartItems} updateCart={updateCart} />} />
          <Route path='/products/:pid' element={<ProductDetail addCart={addCart} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

