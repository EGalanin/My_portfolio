import styled, {css} from "styled-components";
import {font} from "../../../styles/common/Common";
import {Button} from "../../../components/Button";
import {theme} from "../../../styles/Theme";

const ListItem = styled.li`
    ${font({family: "'DM Sans', sans-serif", weight: 500, Fmax: 20, Fmin: 16})}
    height: 26px;
    line-height: 26px;
    text-align: center;

    &:hover ${Button} {
        color: ${theme.colors.colorActive};
        cursor: pointer;
    }
`;

const Menu = styled.nav`
    ul {
        display: flex;
        gap: 50px;
        justify-content: center;
        list-style-type: none;
    }
`;

const MobileMenuOPopup= styled.div<{isOpen: boolean}>`
    position: fixed;
    background-color: ${theme.colors.projectBg};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; 
    z-index: 99999;
    display: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}> `
        display: flex;
        justify-content: center;
        align-items: center;
    `} 
    
    ul {
        display: flex;
        gap: 50px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        list-style-type: none;
    }
`;

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999999;
    
    span {
       display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.colorFont};
        position: absolute;
        left: 30px;
        bottom: 40px;

        ${props => props.isOpen && css<{isOpen: boolean}> `
            background-color: rgba(255, 255, 255, 0);
        `}

        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.colorFont};
            position: absolute;
            transform: translateY(-10px);
            
            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
            `}
        }
        
        &::after {
            content: '';
            display: block;
            width: 25px;
            height: 2px;
            background-color: ${theme.colors.colorFont};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }        
    }    
`;

export const S = {
    ListItem,
    Menu,
    MobileMenuOPopup,
    BurgerButton
}