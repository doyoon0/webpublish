import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductAvatar } from './ProductAvatar';
import { fetchData, axiosData, groupByRows } from '../../utils/dataFetch.js'

export function ProductList() {

    const [rows, setRows] = useState([]);
    const [number, setNumber] = useState(3); //JS로 하면 새로고침을 수동으로 해줘야하니까 useState로 변수지정

    useEffect(() => {
        const load = async () => {
            const jsonData = await axiosData("/data/products.json"); //일차원 배열
            const rows = groupByRows(jsonData, number); //이차원배열
            setRows(rows); //이차원배열로 넘겨서 reduce 처리
        }

        load();
    }, [number]); // 여기있는 뭔가를 넘기면 값을 다시 가져와라

    return (
        <div>
            {rows && rows.map((rowArray, idx) =>
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

