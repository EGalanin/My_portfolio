import React from 'react';
import {S} from '../HeaderMenu_Styled';
import {Menu, MenuPropsType} from "../../../../components/menu/Menu";

export const DesktopMenu: React.FC<{ menuItems: MenuPropsType[] }> = (props: { menuItems: MenuPropsType[] }) => {
    return (
        <S.Menu>
            <Menu menuItems={props.menuItems}/>
        </S.Menu>
    );
};