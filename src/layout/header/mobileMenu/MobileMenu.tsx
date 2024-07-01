import React from 'react';
import styled, {css} from "styled-components";
import {Button} from "../../../components/Button";
import {theme} from "../../../styles/Theme";


export const  MobileMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuOPopup isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <Button as="a" href="#">{item}</Button>
                                {/*<a href=''>{item}</a>*/}
                            </ListItem>
                        )
                    })}
                </ul>
            </MobileMenuOPopup>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: none;    
    @media ${theme.media.tablet} {
        display: block;
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

const ListItem = styled.li`
    //width: 56px;
    height: 26px;     
    font-family: 'DM Sans', sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    text-align: center;
    //gap: 10px;
    
    &:hover ${Button} {
        color: ${theme.colors.colorActive};
        cursor: pointer;
    }  
`;
