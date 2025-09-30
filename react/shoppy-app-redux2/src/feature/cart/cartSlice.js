import { createSlice } from '@reduxjs/toolkit'
import { cartItemsCheck, cartItemsAddInfo } from '../../utils/cart.js';

const initialState = {
    cartCount: 0,
    cartList: [],
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addCartItem(state, action) {
            const { cartItem } = action.payload;
            state.cartList = cartItemsCheck(state.cartList, cartItem);
        },

        updateCartCount(state) {
            state.cartCount = state.cartList.reduce((total, item) => total + item.qty, 0);
        },

        showCartItem(state, action) {
            const { items } = action.payload;
            state.cartList = cartItemsAddInfo(items, state.cartList);
        },

        updateTotalPrice(state) {
            state.totalPrice = state.cartList.reduce((total, item) => total + (item.qty * item.price), 0);
        },

        updateCartItem(state, action) {
            const { cid, type } = action.payload;
            state.cartList = state.cartList.map((item) =>
                item.cid === cid ? //cid 같은지 체크(1)
                    type === '+' ? { ...item, qty: item.qty + 1 } : //type이 +/- 체크(2)
                        item.qty > 1 ? //qty가 1보다 큰지 체크(3)
                            { ...item, qty: item.qty - 1 } :
                            item
                    : item
            );
        },

        removeCartItem(state, action) {
            const { cid } = action.payload;
            state.cartList = state.cartList.filter(item => !(item.cid === cid));
        }

    }
})

export const { addCartItem, updateCartCount, showCartItem, updateTotalPrice, updateCartItem, removeCartItem } = cartSlice.actions
export default cartSlice.reducer