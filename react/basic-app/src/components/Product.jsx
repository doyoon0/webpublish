import {useState, useEffect} from "react";

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

    //컴포넌트 호출 시 데이터 로딩, 비동기 처리 --> useEffect Hooks 함수
    useEffect(()=>{
        // [방법 1.]
        // fetch("/data/best_product.json")
        //     .then(response => response.json())
        //     .then(jsonData => setBestProductList(jsonData))
        //     .catch(error => console.log(error));

        // [방법 2.]
        const fetchData = async () => {
            const response = await fetch("/data/best_product.json");
            const jsonData = await response.json();
            setBestProductList(jsonData);
        }

        fetchData();
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
                                cartCount={cartCount} />
                <BestProductContent
                                title={item.title}
                                sale={item.sale}
                                price={item.price}
                                like={item.like}/>
            </div>
        }
        </>
    );
}

/**
 * 베스트 상품 컨텐츠 컴포넌트
 */
export function BestProductContent({title, sale, price, like}) {
    return(
        <div className="best-product-content">
            <p className="title">{title}</p>
            <span className="sale">{sale}</span>
            <span className="price">{price}</span>
            { like ? <span className="like">🤍</span> : "" }
        </div>
    );
}

/**
 * 베스트 상품 이미지 컴포넌트
 */
export function BestProductImage({img, style, rank, like, cartCount}) {
    const handleAddCart = () => { //이벤트는 지금 현재 컴포넌트에
        cartCount();
    }
    return (
        <div className="best-product-img">
            <ProductImage img={img} style={style} />
            <span className="no">{rank}</span>
            { like ? <span className="cart" onClick={handleAddCart}>🛒</span> : "" }
        </div>
    );
}

/**
 * 상품 이미지 컴포넌트
 */
export function ProductImage({img,style}) {
    const {width, height} = style;
    return (
        <img src={img} style={{width:width, height:height}}/>
    );
}