import styled from "styled-components";
import {Button} from "../Button";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/common/Common";

const Menu = styled.nav`
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
        list-style-type: none;
    }

    ${Button} {
        color: ${theme.colors.titleFont};
    } 
        
    @media ${theme.media.mobile} {
        ul {
            flex-direction: column;
            gap: 10px;
        }
    }        
`;

const ListItem = styled.li`
    ${font({family: "'DM Sans', sans-serif", color: `${theme.colors.colorMain}`, weight: 400, Fmax: 18, Fmin: 14})}
    height: 26px;
    line-height: 26px;
    text-align: left;

    &:hover ${Button} {
        color: ${theme.colors.colorActive};
        cursor: pointer;
    }
`;

export const S ={
    Menu,
    ListItem
}