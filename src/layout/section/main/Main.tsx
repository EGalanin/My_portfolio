import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from './../../../assets/img/photo.webp'
import {Container} from "../../../components/Container";
import backImg from "../../../assets/img/Abstract.png";
import {theme} from "../../../styles/Theme";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'}>
                    <div>
                        <Item>Hi 👋,</Item>
                        <Item>I am</Item>
                        <Name>Galanin Evgeniy</Name>
                        <MainTitle>A Web Developer. </MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    //min-height: 60vh;   
    padding: 200px 0;
    display: flex;
    color: ${theme.colors.colorMain}
`;

const Name = styled.h2`
    font-size: 58px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
    text-align: left;
    background-image: linear-gradient(90deg, #13B0F5 50%, #E70FAA 86%);
    color: transparent;
    -webkit-background-clip: text;
    //background: #D9D9D9;
    //background: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%);
);

`;

const MainTitle = styled.h1`
    font-size: 58px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
    text-align: left;
`;

const PhotoWrapper = styled.div`
    position: relative;
    min-width: 628px;
    //width: 100%;
    min-height: 628px;
    //height: 100%;
    background-image: url(${backImg});
`;

const Photo = styled.img`
    position: absolute;
    left: 150px;
    top: 150px;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    border: 9px solid transparent;
    //border-image: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%) 1;
    display: inline-flex;
    background-image: linear-gradient(180deg, #13B0F5 -2.06%, #E70FAA 100%), radial-gradient(circle at top left, #13B0F5, #E70FAA);
    background-origin: border-box;
    //background-clip: content-box, border-box;
`;

const Item = styled.div`
    font-size: 58px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
    text-align: left;
`;