/**
 * AvatarImage 컴포넌트를 반복시키는 컨테이너 컴포넌트
 * 작은 컴포넌트들을 담고있는 컨테이너
 */
export function AvatarImageList({imgList}) {
    return (
        <>
            {
                imgList.map(item => 
                    <img src={item.img} className={item.style} />
                )
            }
        </>
    );
}
