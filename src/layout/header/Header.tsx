import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {SocialLink} from "../../components/socialLink/SocialLink";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const headerItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];
const SocialLinkItems = [{name: 'github', viewbox: "0 0 30 30"}, {name: 'twit', viewbox: "0 0 30 30"}, {name: 'linkedin', viewbox: "0 0 30 30"}, {name: 'telegram', viewbox: "0 0 512 512"}, {name: 'vk', viewbox: "0 0 98 98"}];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-around'} align={'center'}>
                    <Logo/>
                    <HeaderMenu menuItems={headerItems}/>
                    <SocialLink socialItems={SocialLinkItems}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;  
    z-index: 99999;
    padding-top: 30px;
`;

