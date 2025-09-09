import { useState } from "react";

export function CounterTest({name}) {
    const [number, setNumber] = useState(0); 
    let count = () => {
        setNumber(number +1);
    }
    return(
        <div>
            <span>{number}</span>
            <button type="button" onClick={count}>{name}</button>
        </div>
    );
}