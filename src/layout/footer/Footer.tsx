import React from 'react';
import styled from "styled-components";
import {Logo, StyledIcon} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {SocialLink, StyledSocialLink} from "../../components/socialLink/SocialLink";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/common/Common";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper wrap={'wrap'} justify={'space-around'} align={'center'}>
                    <Logo/>
                    <Menu menuItems={theme.footerItems}/>
                    <SocialLink socialItems={theme.SocialLinkItems}/>
                </FlexWrapper>
                <Separator/>
                <FlexWrapper wrap={'wrap'} justify={'space-between'} align={'center'}>
                    <Menu menuItems={theme.navigateItems}/>
                    <Copyright>Designed and built by <Span>Galanin Evgeniy</Span> with <Span>Love</Span> & <Span>Coffee</Span></Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    justify-content: center;
    padding: 30px 0;
    //color: ${theme.colors.colorMain};   
    
    ${StyledIcon} {
        @media ${theme.media.mobile} {
            display: none; 
        } 
    }
    
    ${StyledSocialLink} {
        @media ${theme.media.mobile} {
            display: none;            
        }
    }
    // ${FlexWrapper} {
    //     @media ${theme.media.mobile} {
    //         flex-
    //        
    //     }
    // }
    
    
`;

const Separator = styled.hr`
    color: ${theme.colors.accentColor};
    margin: 62px 0 40px;
`;

const Copyright = styled.small`
    //font-size: 18px;
    ${font({weight: 400, Fmax: 18, Fmin: 12})}
    //font-size: calc( (100vw - 576px) / (1600 - 576) * (18 - 14) + 14px);
    //font-weight: 400;
    line-height: 26px;
    text-align: center;
    opacity: 50%;
`;

const Span = styled.span`
    background-image: linear-gradient(90deg, #1986b6 50%, #E70FAA 86%);
    color: transparent;
    -webkit-background-clip: text;
`;


