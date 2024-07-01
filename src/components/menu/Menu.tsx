import React from 'react';
import styled from "styled-components";
import {Button} from "../Button";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
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
    //font-size: 18px;
    font-size: calc( (100vw - 576px) / (1600 - 576) * (18 - 14) + 14px);
    font-weight: 400;
    line-height: 26px;
    text-align: left;

    &:hover ${Button} {
        color: white;
        cursor: pointer;
    }
`;

