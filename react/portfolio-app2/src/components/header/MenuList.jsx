import { useState } from 'react';
import { Menu } from "./Menu.jsx";

export function MenuList() {
    const menuList = [
        { "href": "#home", "name": "Home" },
        { "href": "#about", "name": "About" },
        { "href": "#skill", "name": "Skill" },
        { "href": "#work", "name": "My Work" },
        { "href": "#testimonial", "name": "Testimonial" },
        { "href": "#contact", "name": "Contact" },
    ];
    const [active, setActive] = useState('Home');
    const handleClick = (name) => {
        setActive(name);
    }

    return (
        <nav>
            <ul className="header-menu">
                {menuList && menuList.map(menu =>
                    <Menu href={menu.href}
                        name={menu.name}
                        click={handleClick}
                        style={active === menu.name ?
                            "header-menu-item active" : "header-menu-item"}
                    />
                )}
            </ul>
        </nav>
    );
}