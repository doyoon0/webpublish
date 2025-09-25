import { createContext, useState } from "react";

//1. Context 생성
export const CartContext = createContext();

//2. CartProvider
export const CartProvider = ({children}) => {
    const [cartCount, setCartCount] = useState(0);

    return (
        <CartContext.Provider value={{cartCount, setCartCount}}>
            {children}
        </CartContext.Provider>
    );
}