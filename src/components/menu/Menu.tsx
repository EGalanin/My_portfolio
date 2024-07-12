import React from 'react';
import {S} from './Menu_Styled';

export type MenuPropsType = {
    title: string
    href: string
}

export const Menu: React.FC<{ menuItems: MenuPropsType[] }> = (props: { menuItems: MenuPropsType[] }) => {
    return (
        <S.Menu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <S.ListItem key={index}>
                            <S.NavLink
                                activeClass="active"
                                spy={true}
                                to={item.href}
                                smooth={true}
                            >
                                {item.title}
                            </S.NavLink>
                        </S.ListItem>
                    )
                })}
            </ul>
        </S.Menu>
    );
};