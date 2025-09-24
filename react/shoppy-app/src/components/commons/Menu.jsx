export function Menu({ href, name, style, isIcon, icon, handleClick }) {
    return (
        <a href={href}
            className="menu-item"
            onClick={() => {handleClick(name)}}
            style={{
                width: style.w,
                height: style.h,
                backgroundColor: style.bg,
                color: style.color,
                fontSize: style.fs
            }}>
            {isIcon ? icon : ""}{name}
        </a>
    );
}