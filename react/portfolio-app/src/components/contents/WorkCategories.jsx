import { useState } from 'react';

export function WorkCategories({categories}) {

    const [selected, setSelected] = useState('All');
    const handleMouseOver = (name) => {
        setSelected(name);
    }

    return (
        <ul className="categories">
            {categories && categories.map(item => 
               <WorkCategory    name={item.name} 
                                count={item.count} 
                                onHover={handleMouseOver}
                                style={selected === item.name ?
                                    "category selected" : "category"}/>
            )}
        </ul>
    );
}

export function WorkCategory({ name, count, style, onHover }) {
    return (
        <li>
            <button className={style} onMouseOver={() => onHover(name)}>
                {name}
                <span className="category-count">{count}</span>
            </button>
        </li>
    );
}