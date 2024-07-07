import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {SocialLink} from "../../components/socialLink/SocialLink";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {theme} from "../../styles/Theme";
import {Toggle} from "../../components/toggle/Toggle";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from './Header_Styled';


export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-around'} align={'center'}>
                    <Logo/>
                    {width > breakpoint ? <DesktopMenu menuItems={theme.navigateItems}/> : <MobileMenu menuItems={theme.navigateItems} />}
                    <SocialLink socialItems={theme.SocialLinkItems}/>
                    <Toggle />
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};