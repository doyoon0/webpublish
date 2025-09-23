import React, { useState, useEffect } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { axiosData } from '../utils/dataFetch.js'
import { cartItemsAddInfo, getTotalPrice } from '../utils/cart.js';
import '../styles/cart.css';

export function Cart({ items, updateCart }) {
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetch = async () => {
            const jsonData = await axiosData('/data/products.json');
            setCartList(cartItemsAddInfo(jsonData, items)); //cart.js에서 정의. 장바구니에 담을 아이템정보
            setTotalPrice(getTotalPrice(jsonData, items)); //cart.js에서 정의. 아이템 정보 다 넘긴뒤 해당 아이템만 누적합
        }
        fetch();
    }, []);

    //수량 및 금액 업데이트 함수
    const handleUpdateCartList = (cid, type) => {
        // 수량 업데이트
        setCartList((cartList) => cartList.map((item) => 
            item.cid === cid ? //cid 같은지 체크(1)
                type === '+' ? {...item, qty: item.qty+1} : //type이 +/- 체크(2)
                item.qty > 1 ? //qty가 1보다 큰지 체크(3)
                    {...item, qty: item.qty-1} :
                    item
            : item
        ));

        //금액 업데이트
        const findItem = cartList.find((item) => item.cid === cid); //해당 아이템 찾음(1)
        type === '+' ? //type이 +/- 체크(2)
            setTotalPrice(totalPrice + findItem.price) : //찾았으면 금액증가(3)
            findItem.qty > 1 ? //수량이 1개 이상인지(4) => 아니라면 delete해야하니까
                setTotalPrice(totalPrice - findItem.price) : //1개 이상이면 금액 - (5)
                setTotalPrice(totalPrice) //1개 이하면 더 뺄수없고 가격 그대로 (6 마지막) 
        updateCart(cid, type); //장바구니 아이콘 위의 수량 변경(App.js)
    }

    //장바구니 아이템 삭제 함수
    const handleRemoveCartList = (cid) => {
        const findItem = cartList.find((item) => item.cid === cid); //해당하는 아이템 찾기
        setTotalPrice(totalPrice - (findItem.qty * findItem.price)); //몇 개가 있든 한번에 삭제

        //cartList 다시 불러와야함(초기값은 빈배열임)
        setCartList((cartList) => {
            return cartList.filter(item => !(item.cid === cid)); //삭제한것 제외하고 전부 
        });

        updateCart(cid); //장바구니 아이콘 위의 수량 변경(App.js)
    }

    return (
        <div className='cart-container'>
            <h2 className='cart-header'>장바구니</h2>
            {cartList && cartList.map(item =>
                <div key={item.pid}>
                    <div className='cart-item'>
                        {item.cid}
                        <img src={item.image} alt="" />
                        <div className='cart-item-details'>
                            <p className='cart-item-title'>{item.name}</p>
                            <p className='cart-item-title'>{item.size}</p>
                            <p className='cart-item-price'>{parseInt(item.price).toLocaleString()}원</p>
                        </div>
                        <div className='cart-quantity'>
                            <button type='button'
                                onClick={() => { item.qty > 1 && handleUpdateCartList(item.cid, '-') }}>-</button>
                            <input type='text' value={item.qty} readOnly />
                            <button type='button'
                                onClick={() => { handleUpdateCartList(item.cid, '+') }}>+</button>
                        </div>
                        <button className='cart-remove'
                            onClick={() => { handleRemoveCartList(item.cid) }}>
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                </div>
            )}

            {/* 주문 버튼 출력 */}
            <>
                <div className='cart-summary'>
                    <h3>주문 예상 금액</h3>
                    <div className='cart-summary-sub'>
                        <p className='cart-total'>
                            <label>총 상품 가격 : </label>
                            <span>{totalPrice.toLocaleString()}원</span>
                        </p>
                        <p className='cart-total'>
                            <label>총 할인 가격 : </label>
                            <span>-0원</span>
                        </p>
                        <p className='cart-total'>
                            <label>총 배송비 : </label>
                            <span>0원</span>
                        </p>
                    </div>
                    <p className='cart-total2'>
                        <label>총 금액: </label>
                        <span>{totalPrice.toLocaleString()}원</span>
                    </p>
                </div>
                <div className='cart-actions'>
                    <button type='button'>주문하기</button>

                </div>
            </>
        </div>
    );
}
