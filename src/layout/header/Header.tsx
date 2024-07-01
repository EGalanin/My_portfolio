import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {SocialLink} from "../../components/socialLink/SocialLink";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {theme} from "../../styles/Theme";
import {Toggle} from "../../components/toggle/Toggle";
import {MobileMenu} from "./mobileMenu/MobileMenu";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-around'} align={'center'}>
                    <Logo/>
                    <HeaderMenu menuItems={theme.navigateItems}/>
                    <MobileMenu menuItems={theme.navigateItems} />
                    <SocialLink socialItems={theme.SocialLinkItems}/>
                    <Toggle />
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
    z-index: 99999;
    padding-top: 30px;
`;

