import React from 'react';
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styled';


export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.Menu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuOPopup isOpen={false}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuOPopup>
        </S.Menu>
    );
};