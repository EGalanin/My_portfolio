import React from 'react';
import {Button} from "../../../../components/Button";
import {S} from '../HeaderMenu_Styled';

export  const Menu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
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
    );
};



