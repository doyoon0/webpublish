import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productList: [], //2차원 배열
    products: [], //1차원 배열
    product: {} //상품하나
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

        createProduct(state, action) {
            const { productList, products } = action.payload;
            state.products = products;
            state.productList = productList;
        },

        filterProduct(state, action) {
            const { pid } = action.payload;
            state.product = state.products.find((item) => item.pid === pid);
        }

    }
})

export const { createProduct, filterProduct } = productSlice.actions
export default productSlice.reducer