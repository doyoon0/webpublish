import React from 'react';
import { createProduct, filterProduct } from './productSlice.js';
import { axiosData, groupByRows } from '../../utils/dataFetch.js';

export const getProduct = (pid) => async (dispatch) => {
    // dispatch(filterProduct(pid)); 파라미터가 하나라면.
    dispatch(filterProduct({ "pid": pid }));
}

export const getProductList = (number) => async (dispatch) => {
    //slice에 있는 productList를 뭐 할필요 없고 값만 넘겨주면 되니까 여기서 jsonData 호출
    const jsonData = await axiosData("/data/products.json");
    const rows = groupByRows(jsonData, number);
    dispatch(createProduct({ "productList": rows, "products": jsonData }));
}


// export const removeCart = (cid) => async (dispatch) => {
//     dispatch(removeCartItem({"cid": cid}));
//     dispatch(updateTotalPrice());
//     dispatch(updateCartCount());
// }

// export const updateCart = (cid, type) => async (dispatch) => {
//     dispatch(updateCartItem({ "cid": cid, "type": type })); //slice에서 item으로 구조분해할당
//     dispatch(updateTotalPrice());
//     dispatch(updateCartCount());

// }

// export const showCart = () => async (dispatch) => {
//     // 여기서는 Slice에 있는 cartList에 접근할수가 없기때문에 items라는 이름을 붙여 Slice로 넘긴다
//     const jsonData = await axiosData('/data/products.json');
//     dispatch(showCartItem({ "items": jsonData }));
//     dispatch(updateTotalPrice());
// }

// // cartAPI.js 또는 actions.js
// export const addCart = (cartItem) => async (dispatch) => {
//     dispatch(addCartItem({ "cartItem": cartItem }));
//     dispatch(updateCartCount());
// };