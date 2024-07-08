import React, {useState} from 'react';
import {Menu, MenuPropsType} from "../menu/Menu";
import {S} from '../HeaderMenu_Styled';


export const MobileMenu: React.FC<{ menuItems: MenuPropsType[] }> = (props: { menuItems: MenuPropsType[] }) => {

    const [menuIsOpen, setmenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => { setmenuIsOpen( !menuIsOpen ) };

    return (
        <S.Menu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={ onBurgerBtnClick }>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuOPopup isOpen={menuIsOpen} onClick={() => {setmenuIsOpen( false )} }>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuOPopup>
        </S.Menu>
    );
};