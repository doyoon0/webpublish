/**
 * 메뉴 컴포넌트
 */
/*
export function Menu2(props) {
    return (
        <a href={props.data.href}
            className="menu"
            style={{color: props.data.color, background: props.data.bg}}>{props.data.title}</a>
    );
}
*/
export function Menu2({data}) { //data: {title:"..."}
    const {title, href, color, bg} = data;
    return (
        <a href={href}
            className="menu"
            style={{color: color, background: bg}}>{title}</a>
    );
}