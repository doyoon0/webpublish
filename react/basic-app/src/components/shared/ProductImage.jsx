import { Image } from '../commons/Image.jsx';

/**
 * 상품 이미지 컴포넌트 (어떤 상품이든 모두 공유)
 */
export function ProductImage({img,style}) {
    return (
        <Image  img={img} 
                width={style.width} 
                height={style.height}/>
    );
}