import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {SocialLink} from "../../components/socialLink/SocialLink";

const headerItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];
const SocialLinkItems = ['github', 'twit', 'linkedin'];

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu menuItems={headerItems}/>
            <SocialLink socialItems={SocialLinkItems}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    background-color: #d4f8ec;
    i
`;

