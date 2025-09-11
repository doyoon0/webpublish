import {useState, useEffect} from "react";
import { fetchData } from '../util/commonData.js';
import { BestProductImage } from "./shared/BestProductImage.jsx";
import { BestProductContent } from "./shared/BestProductContent.jsx";

/**
 * 베스트 상품 컴포넌트
 */
export function BestProduct() {
    const [cartCount, setCartCout] = useState(0);
    
    const handleAddCart = () => {
        setCartCout(cartCount + 1);
    }

    //useEffect 안에서 데이터를 fetch한 후, 일반 const 변수에 바로 담을 수는 없다.
    //그 데이터를 컴포넌트 상태로 관리하려면 useState를 통해 선언한 변수에 setState로 넣어야 한다.
    const [bestProductList, setBestProductList] = useState([]); 

    //fetch 함수 생성 (비동기 이슈 때문에 함수로 생성)
    useEffect(()=>{
        const fetch = async() => {
            const result = await fetchData("/data/best_product.json"); //return 하도록 수정.
            setBestProductList(result);
        }

        fetch();

    }, []);

    return (
        <>
            <h2>베스트 상품 - 🛒({cartCount})</h2>
            <ul className="best-product">
                {bestProductList.map((product, index) => 
                    (index === 0) ? 
                        <li key={index}><BestProductImage   
                            img={product.img} 
                            style={{width: "600px", height: "700px"}}
                            rank={product.rank}
                            like={product.like}
                            cartCount={handleAddCart}/></li>
                    : <li key={index}><BestProductItem 
                            item={product}
                            cartCount={handleAddCart}/></li>
                )}
            </ul>
        </>
    );
}

/**
 * 베스트 상품 아이템 컴포넌트(개별)
 */
export function BestProductItem({item, cartCount}) {
    return(
        <>
        {
            <div>
                <BestProductImage 
                                img={item.img}
                                style={{width: "200px", height: "250px"}}
                                rank={item.rank}
                                like={item.like}
                                icon={item.icon}
                                icon_style={item.icon_style}
                                cartCount={cartCount} />
                <BestProductContent
                                title={item.title}
                                sale={item.sale}
                                price={item.price}
                                like={item.like}
                                icon={item.icon}/>
            </div>
        }
        </>
    );
}



