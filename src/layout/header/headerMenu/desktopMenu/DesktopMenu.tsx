import React from 'react';
import {Menu, MenuPropsType} from "../menu/Menu";
import {S} from '../HeaderMenu_Styled';


export const DesktopMenu: React.FC<{ menuItems: MenuPropsType[] }> = (props: { menuItems: MenuPropsType[] }) => {
    return (
        <S.Menu>
            <Menu menuItems={props.menuItems}/>
        </S.Menu>
    );
};