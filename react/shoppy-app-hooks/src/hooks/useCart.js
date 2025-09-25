//파일명에 use를 붙여야 react가 인식함
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';
import { cartItemsCheck, updateCartItemsQty, cartItemsAddInfo, getTotalPrice } from '../utils/cart.js';
import { axiosData } from '../utils/dataFetch.js'
/**
 * CartContext를 제어하는 함수를 가진 커스텀 훅
 */
export function useCart() {

    const { setCartCount, setCartList, cartList, cartCount } = useContext(CartContext);

    //컨텍스트 객체의 값을 변경하는 함수 정의
    //장바구니 아이템 추가 (ProductDetail)
    const addCart = (addItem) => {
        setCartList(cartItemsCheck(cartList, addItem));
        //장바구니 카운트는 전체 수량 기준으로 증가
        setCartCount(cartCount + 1);
    }

    //장바구니 출력 : 장바구니 아이템 <-- 이미지, 상품명, 상품가격 추가
    const showCart = () => {
        const fetch = async () => {
            const jsonData = await axiosData('/data/products.json');
            setCartList(cartItemsAddInfo(jsonData, cartList)); //cart.js에서 정의. 장바구니에 담을 아이템정보
            // setTotalPrice(getTotalPrice(jsonData, items)); //cart.js에서 정의. 아이템 정보 다 넘긴뒤 해당 아이템만 누적합
        }
        fetch();
    }

    return { addCart, showCart }
}

