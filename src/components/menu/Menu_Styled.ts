import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/common/Common";
import {Link} from "react-scroll";

const Menu = styled.nav`
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
        list-style-type: none;
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
    transition: ${theme.animations.transition};    
`;

const NavLink = styled(Link)`
    display: block;
    &:hover, &:active{        
        color: ${theme.colors.colorActive};
        cursor: pointer;
        transform: scale(1.2);
    }
`;

export const S ={
    Menu,
    ListItem,
    NavLink
}