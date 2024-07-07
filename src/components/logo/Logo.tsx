import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo: React.FC = () => {
    return (
        <StyledIcon href=''>
            <Icon iconId={'logo'}/>
        </StyledIcon>
    );
};

export const StyledIcon = styled.a`
    //background-color: #978282;

    background-image: linear-gradient(90deg, #13B0F5 50%, #E70FAA 86%);
    color: transparent;
    -webkit-background-clip: text;
`;


