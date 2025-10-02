import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../feature/cart/cartSlice.js';
import productSlice from '../feature/product/productSlice.js';
import authSlice from '../feature/auth/authSlice.js';

const myLoggerMiddleware = (store) => (next) => (action) => {
    console.log("dispatch::", action);
    const result = next(action);
    console.log("next state::", store.getState());

    return result;
}

const myCartSaveMiddleware = (store) => (next) =>(action) => {
    const result = next(action);
    if(typeof action.type === "string" && action.type.startsWith("cart/")) {
        const cart = store.getState().cart;
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

export const store = configureStore({
    reducer: {
        "cart" : cartSlice,
        "product" : productSlice,
        "auth" : authSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(myLoggerMiddleware)
        .concat(myCartSaveMiddleware)

})