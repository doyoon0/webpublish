import { createContext, useState } from "react";

//1. Context 생성
export const ProductContext = createContext();

//2. CartProvider
export const ProductProvider = ({children}) => {
    const [product, setProduct] = useState({});
    const [productList, setProductList] = useState([]);
    const [imgList, setImgList] = useState([]);

    return (
        <ProductContext.Provider value={{ productList, setProductList, product, setProduct, imgList, setImgList }}>
            {children}
        </ProductContext.Provider>
    );
}