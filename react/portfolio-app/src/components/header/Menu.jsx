export function Menu({href, style, name, click}) {
    return (
        <a  href={href} 
            className={style}
            onClick={() => click(name)} // 추가작업이 없으면 따로 handle 함수 만들지 않는다.
            >{name}</a>
    )
}