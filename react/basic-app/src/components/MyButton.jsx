

export function MyButton({name, type, style}) { 
    return (
        <button type={type} className={style}>{name}</button>
    );
}

/*
export function MyButton(props) { //props = {name:"회원가입"}
    return (
        <button type="button" className="mybutton">{props.name}</button>
    );
}
*/