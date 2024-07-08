import React from 'react';
import {Button} from "../Button";
import {S} from './Menu_Styled';
import {MenuPropsType} from "../../layout/header/headerMenu/menu/Menu";

export const Menu: React.FC<{ menuItems: MenuPropsType[] }> = (props: { menuItems: MenuPropsType[] }) => {
    return (
        <S.Menu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <S.ListItem key={index}>
                            <Button as="a" href={`#${item.href}`}>{item.title}</Button>
                            {/*<a href=''>{item}</a>*/}
                        </S.ListItem>
                    )
                })}
            </ul>
        </S.Menu>
    );
};