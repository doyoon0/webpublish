/**
 * 베스트 상품 컨텐츠 컴포넌트
 */
export function BestProductContent({title, sale, price, like, icon}) {
    return(
        <div className="best-product-content">
            <p className="title">{title}</p>
            <span className="sale">{sale}</span>
            <span className="price">{price}</span>
            { like ? <span className="like">{icon}</span> : "" }
        </div>
    );
}