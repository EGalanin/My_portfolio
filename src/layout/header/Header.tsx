import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {SocialLink} from "../../components/socialLink/SocialLink";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

const headerItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];
const SocialLinkItems = ['github', 'twit', 'linkedin'];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-around'} align={'center'}>
                    <Logo/>
                    <Menu menuItems={headerItems}/>
                    <SocialLink socialItems={SocialLinkItems}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
`;

