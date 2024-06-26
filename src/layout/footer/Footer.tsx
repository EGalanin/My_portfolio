import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {SocialLink} from "../../components/socialLink/SocialLink";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";

const footerItems = ['+91 12345 09876', 'info@example.com'];
const SocialLinkItems = [
    {name: 'github', viewbox: "0 0 30 30"},
    {name: 'twit', viewbox: "0 0 30 30"},
    {name: 'linkedin', viewbox: "0 0 30 30"},
    {name: 'telegram', viewbox: "0 0 512 512"},
    {name: 'vk', viewbox: "0 0 98 98"}
];
const headerItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper wrap={'wrap'} justify={'space-around'} align={'center'}>
                    <Logo/>
                    <Menu menuItems={footerItems}/>
                    <SocialLink socialItems={SocialLinkItems}/>
                </FlexWrapper>
                <Separator/>
                <FlexWrapper wrap={'wrap'} justify={'space-between'} align={'center'}>
                    <Menu menuItems={headerItems}/>
                    <Copyright>Designed and built by <Span>Galanin Evgeniy</Span> with <Span>Love</Span> & <Span>Coffee</Span></Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    justify-content: center;
    padding: 30px 0;
`;

const Separator = styled.hr`
    color: #705e5e;
    margin: 20px 0;
`;

const Copyright = styled.small`
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
    opacity: 50%;
`;

const Span = styled.span`
    background-image: linear-gradient(90deg, #1986b6 50%, #E70FAA 86%);
    color: transparent;
    -webkit-background-clip: text;
`;


