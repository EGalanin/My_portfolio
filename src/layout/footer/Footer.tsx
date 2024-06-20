import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {SocialLink} from "../../components/socialLink/SocialLink";
import {FlexWrapper} from "../../components/FlexWrapper";

const footerItems = ['+91 12345 09876', 'info@example.com'];
const SocialLinkItems = ['github', 'twit', 'linkedin'];
const headerItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Logo />
                <Menu menuItems={footerItems}/>
                <SocialLink socialItems={SocialLinkItems}/>
            </FlexWrapper>
            <Separator/>
            <FlexWrapper wrap={'wrap'} justify={'space-between'} align={'center'}>
                <Menu menuItems={headerItems}/>
                <Copyright>Designed and built by Pavan MG with Love & Coffee</Copyright>
            </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #424288;
    justify-content: center;
`;

const Separator = styled.hr`
    color: black;
    
`;

const Copyright = styled.small`

`;


