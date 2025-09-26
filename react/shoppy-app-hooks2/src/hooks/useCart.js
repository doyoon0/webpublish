import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';
import { axiosData } from '../utils/dataFetch.js'
import { cartItemsAddInfo, cartItemsCheck, getTotalPrice } from '../utils/cart.js';

export function useCart() {
    //사용할 전역변수들
    const { cartCount, setCartCount, cartList, setCartList, totalPrice, setTotalPrice } = useContext(CartContext); //전역상태접근

    //Header에 카트 이모티콘 수량 변경
    const addCart = (addItem) => {
        setCartCount(cartCount + 1);
        setCartList(cartItemsCheck(cartList, addItem));
    }

    //Cart에 리스트 띄우기
    const showCart = () => {
        const fetch = async () => {
            const jsonData = await axiosData('/data/products.json');
            setCartList(cartItemsAddInfo(jsonData, cartList));
            setTotalPrice(getTotalPrice(jsonData, cartList));
        }
        fetch();
    }

    const updateCart = (cid, type) => {
        //카트 수량 업데이트
        setCartList((cartList) => cartList.map((item) =>
            item.cid === cid ? //cid 같은지 체크(1)
                type === '+' ? { ...item, qty: item.qty + 1 } : //type이 +/- 체크(2)
                    item.qty > 1 ? //qty가 1보다 큰지 체크(3)
                        { ...item, qty: item.qty - 1 } :
                        item
                : item
        ));

        //카트 수량 변경되면 장바구니도
        type === "+" ?
            setCartCount(cartCount + 1) :
            cartCount > 0 ?
                setCartCount(cartCount - 1) : setCartCount(cartCount);

        //금액 업데이트
        const findItem = cartList.find((item) => item.cid === cid);
        type === '+' ?
            setTotalPrice(totalPrice + findItem.price) :
            findItem.qty > 1 ?
                setTotalPrice(totalPrice - findItem.price) :
                setTotalPrice(totalPrice)

    }

    
    //장바구니 아이템 삭제 함수
    const removeCart = (cid) => {
        const findItem = cartList.find((item) => item.cid === cid); //해당하는 아이템 찾기
        setTotalPrice(totalPrice - (findItem.qty * findItem.price)); //몇 개가 있든 한번에 삭제

        //cartList 다시 불러와야함(초기값은 빈배열임)
        setCartList((cartList) => {
            return cartList.filter(item => !(item.cid === cid)); //삭제한것 제외하고 전부 
        });

        setCartCount(cartCount - findItem.qty); 
    }


    return { addCart, showCart, updateCart, removeCart }

}

