import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductAvatar } from './ProductAvatar';
import { useProduct } from '../../hooks/useProduct.js'
import { ProductContext } from '../../context/ProductContext.js';

export function ProductList() {
    const { productList } = useContext(ProductContext);
    const { createProduct } = useProduct();
    const [number, setNumber] = useState(3); //JS로 하면 새로고침을 수동으로 해줘야하니까 useState로 변수지정

    useEffect(() => {
        createProduct(number);
    }, [number]); // 여기있는 뭔가를 넘기면 값을 다시 가져와라

    return (
        <div>
            {productList && productList.map((rowArray, idx) =>
                <div className='product-list' key={idx}>
                    {rowArray && rowArray.map((product, idx) =>
                        <Link to={`/products/${product.pid}`} key={product.pid}>
                            <ProductAvatar img={product.image} key={idx} />
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
}

