import React from 'react';
import {Button} from "../Button";
import {S} from './Menu_Styled';

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.Menu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <S.ListItem key={index}>
                            <Button as="a" href="#">{item}</Button>
                            {/*<a href=''>{item}</a>*/}
                        </S.ListItem>
                    )
                })}
            </ul>
        </S.Menu>
    );
};