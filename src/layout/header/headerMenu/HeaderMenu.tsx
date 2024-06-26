import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";


export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map( (item, index) => {
                    return (
                        <ListItem key={index}>
                            <Button  as="a" href="#">{item}</Button>
                            {/*<a href=''>{item}</a>*/}
                        </ListItem>
                    )
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
      display: flex;
        gap: 20px;
        justify-content: center;
        list-style-type: none;
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
    gap: 10px;
    
    &:hover ${Button} {
        color: white;
        cursor: pointer;
    }  
`;
