import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext.js';
import { axiosData, groupByRows } from '../utils/dataFetch.js';

export function useProduct() {
    const { productList, setProductList, product, setProduct, imgList, setImgList } = useContext(ProductContext);

    const createProduct = (number) => {
        const load = async () => {
            const jsonData = await axiosData("/data/products.json"); //일차원 배열
            const rows = groupByRows(jsonData, number); //이차원배열
            setProductList(rows); //이차원배열로 넘겨서 reduce 처리
        }

        load();
    }

    const filterProduct = (pid) => {
            const [filterProduct] = productList.flat().filter((item) => item.pid === pid);
            setProduct(filterProduct);
            setImgList(filterProduct.imgList);
        }

    return {createProduct, filterProduct};
}

