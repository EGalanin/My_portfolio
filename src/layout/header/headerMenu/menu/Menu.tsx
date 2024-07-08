import React from 'react';
import {Button} from "../../../../components/Button";
import {S} from '../HeaderMenu_Styled';

export type MenuPropsType = {
    title: string
    href?: string
}

export  const Menu: React.FC<{menuItems: MenuPropsType[]}> = (props: {menuItems: MenuPropsType[]}) => {
    return (
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
    );
};



