import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const SocialLink = styled.nav`
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
        list-style-type: none;
    }

    // @media ${theme.media.tablet} {
    //     display: none;        
    // }
`;

const SocialItem = styled.li`       
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.colorFont};
    transition: ${theme.animations.transition};

    &:hover {
        color: ${theme.colors.colorActive};
        cursor: pointer;
        transform: translateY(-5px);
    }
`;

export const S = {
    SocialLink,
    SocialItem
}