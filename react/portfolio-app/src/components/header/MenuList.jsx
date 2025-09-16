import { useState } from 'react';
import { Menu } from './Menu.jsx';

export function MenuList() {
    const menus = [
        { "href":"#home", "name": "Home"},
        { "href":"#about", "name": "About"},
        { "href":"#skill", "name": "Skill"},
        { "href":"#work", "name": "My Work"},
        { "href":"#testimonial", "name": "Testimonial"},
        { "href":"#contact", "name": "Contact"},
    ] // map 돌릴수있게 배열로 (map 은 바로바로 배열을 순회해서 return 하기때문에 )

    const [active, setActive] = useState('Home');
    const handleClick = (name) => { // 자식에게 전송하는 props 이벤트 핸들러 함수
        setActive(name);
    }

    return (
        <nav>
            <ul className="header-menu">
                    {menus && menus.map((item) => {
                        return (
                            <li>
                                <Menu   href={item.href} 
                                        name={item.name}
                                        click={handleClick}
                                        style={active === item.name ? 
                                                "header-menu-item active" : "header-menu-item"} 
                                        />
                            </li>
                        )
                    })}
            </ul>
        </nav>
    );
}