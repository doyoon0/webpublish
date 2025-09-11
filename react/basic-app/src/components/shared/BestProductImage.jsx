import { ProductImage } from './ProductImage.jsx';
import { Icon } from '../commons/Icon.jsx'

/**
 * 베스트 상품 이미지 컴포넌트
 */
export function BestProductImage({img, style, rank, like, icon, icon_style, cartCount}) {
    const handleAddCart = () => { //이벤트는 지금 현재 컴포넌트에서 작성해야함(요기)
        cartCount();
    }

    //Strict Mode가 ON일때는 이 값이 null인지 체크를 해준다.
    //index.js의 StrictMode가 해제되어 있는 경우, 개발자가 객체, 배열등을 코드로 체크 로직
    const { bg, color, radius, width, height } = icon_style || {};
    return (
        <div className="best-product-img">
            <ProductImage img={img} style={style} />
            <Icon   value={rank}
                    bg={bg}
                    color={color}
                    radius={radius}
                    width={width}
                    height={height}/>
            { like ? <span className="cart" onClick={handleAddCart}>{icon}</span> : "" }
        </div>
    );
}