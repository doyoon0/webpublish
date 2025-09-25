import { createContext, useState } from "react";

//1. Context 생성
export const CartContext = createContext();

//2. CartProvider는 CartContext를 사용하는 컴포넌트들의 범위를 정의
//이 범위에 속한 컴포넌트들은, cartCount를 쓸수있다. (value값으로 보낸것만 사용가능)
export const CartProvider = ({ children }) => { 
    const [cartCount, setCartCount] = useState(0); //1. 장바구니 수량 관리
    const [cartList, setCartList] = useState([]);

    //handling 하는애가 Provider
    return (
        <CartContext.Provider value={{ cartCount, setCartCount, cartList, setCartList }}> 
            {children}
        </CartContext.Provider>
    );
}
