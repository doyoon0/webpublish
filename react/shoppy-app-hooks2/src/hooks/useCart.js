import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';

export function useCart() {
    const { setCartCount, cartCount } = useContext(CartContext); //전역상태접근

    const addCart = (addItem) => {
        setCartCount(cartCount + 1);
    }

    return { addCart }
}

