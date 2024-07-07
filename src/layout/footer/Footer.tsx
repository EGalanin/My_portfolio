import React from 'react';
import {Logo, StyledIcon} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {SocialLink} from "../../components/socialLink/SocialLink";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";

import {S} from './Footer_Styled';

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper wrap={'wrap'} justify={'space-around'} align={'center'}>
                    <Logo/>
                    <Menu menuItems={theme.footerItems}/>
                    <SocialLink socialItems={theme.SocialLinkItems}/>
                </FlexWrapper>
                <S.Separator/>
                <FlexWrapper wrap={'wrap'} justify={'space-between'} align={'center'}>
                    <Menu menuItems={theme.navigateItems}/>
                    <S.Copyright>Designed and built by <S.Span>Galanin
                        Evgeniy</S.Span> with <S.Span>Love</S.Span> & <S.Span>Coffee</S.Span></S.Copyright>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};