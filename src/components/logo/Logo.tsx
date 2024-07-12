import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {animateScroll as scrol} from "react-scroll";

export const Logo: React.FC = () => {
    return (
        <StyledIcon onClick={() => {
            scrol.scrollToTop()
        }}>
            <Icon iconId={'logoName'} width={'200px'} height={'66px'} viewBox={'30 5 200 66'}/>
        </StyledIcon>
    );
};

export const StyledIcon = styled.a`

    background-image: linear-gradient(90deg, #13B0F5 50%, #E70FAA 86%);
    color: transparent;
    -webkit-background-clip: text;
`;


