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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} /> 
          <Route path='/all' element={<Products/>} /> 
          <Route path='/login' element={<Login/>} /> 
          <Route path='/signup' element={<Signup/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

