import { useState } from "react";

export function Counter({click, total, init}) {
    //부모에서 받아오는 값
    //click은 자식이 그리는 html의 decre/incre 동작내에서 지정해주는 type을 부모로 전달하는 역할
    //total 값은 부모에게 받아서 출력만 할뿐

    //자식에서 처리하는 값
    const [number, setNumber] = useState(0);

    const handleClickIncrement = () => {
        if(number < 10) {
          setNumber(number +1)  
          click("+"); //부모에게 number 전달
        } else setNumber(number);
    }

    const handleClickDecrement = () => {
        if (number > 0) {
            setNumber(number -1)
            click("-");
        } else setNumber(0);
        
    }

    const handleClickInit = () => {
        setNumber(0);
    }

    

    return (
        <div className="counter-container">
            <div>
                <span className="number">{number}</span>
                <span>/</span>
                <span className="total-number">{total}</span>
            </div>
            <div>
                <button type="button" 
                        onClick={handleClickDecrement}>-(감소)</button>
                <button type="button" 
                        onClick={handleClickIncrement}>+(증가)</button>
                <button type="button" 
                        onClick={handleClickInit}>초기화</button>
            </div>
        </div>
    );

}