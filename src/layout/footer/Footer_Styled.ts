import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {StyledIcon} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import {font} from "../../styles/common/Common";

const Footer = styled.footer`
    justify-content: center;
    padding: 30px 0;
        //color: ${theme.colors.colorMain};   

    ${StyledIcon} {
        @media ${theme.media.tablet} {
            display: none;
        }
    }

    ${FlexWrapper} {
        @media ${theme.media.mobile} {
            //flex-direction: column;            
        }
        @media ${theme.media.tablet} {
            justify-content: center;
            flex-direction: column;
        }
    }
`;

const Separator = styled.hr`
    color: ${theme.colors.accentColor};
    margin: 62px 0 40px;

    @media ${theme.media.tablet} {
        margin: 42px 0 20px;
    }
`;

const Copyright = styled.small`
    ${font({weight: 400, Fmax: 18, Fmin: 12})}
    line-height: 26px;
    text-align: center;
    opacity: 50%;
`;

const Span = styled.span`
    background-image: linear-gradient(90deg, #1986b6 50%, #E70FAA 86%);
    color: transparent;
    -webkit-background-clip: text;
`;

export const S = {
    Footer,
    Separator,
    Copyright,
    Span
}