import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from './../../../assets/img/photo.webp'
import {Container} from "../../../components/Container";
import backImg from "../../../assets/img/Abstract.png";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/common/Common";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <MainWrapper>
                    {/*<FlexWrapper align={'center'} justify={'space-around'}>*/}
                    <TextWrapper>
                        <Item>Hi 👋,</Item>
                        <Item>I am</Item>
                        <Name>Galanin Evgeniy</Name>
                        <MainTitle>A Web Developer. </MainTitle>
                    </TextWrapper>
                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                    {/*</FlexWrapper>*/}
                </MainWrapper>

            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`     
    padding: 200px 0;
    display: flex;
    color: ${theme.colors.colorMain}     
`;

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${theme.media.mobile} {      
        flex-direction: column;        
    }
`;

const TextWrapper = styled.div`
    
`;

const Item = styled.div`
    //font-size: 58px;
    ${font({weight: 700, Fmax: 58, Fmin: 25})}
    //font-size: calc( (100vw - 576px) / (1600 - 576) * (58 - 25) + 25px);
    //font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
    text-align: left;
`;

const Name = styled.h2`
    //font-size: 58px;
    ${font({weight: 700, Fmax: 58, Fmin: 25})}
    //font-size: calc( (100vw - 576px) / (1600 - 576) * (58 - 25) + 25px);
    //font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
    text-align: left;
    background-image: linear-gradient(90deg, #13B0F5 50%, #E70FAA 86%);
    color: transparent;
    -webkit-background-clip: text;
`;

const MainTitle = styled.h1`
    //font-size: 58px;
    //font-size: calc( (100vw - 576px) / (1600 - 576) * (58 - 25) + 25px);
    ${font({weight: 700, Fmax: 58, Fmin: 25})}
    //font-weight: 700;
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
    background-repeat: no-repeat;
    background-size: cover;

    @media ${theme.media.tablet} {
        min-width: 428px;       
        min-height: 428px;
    }    
`;

const Photo = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    width: 350px;
    height: 350px;
    border-radius: 50%;
    border: 9px solid transparent;    
    display: inline-flex;
    background-image: linear-gradient(180deg, #13B0F5 -2.06%, #E70FAA 100%), radial-gradient(circle at top left, #13B0F5, #E70FAA);
    background-origin: border-box;

    @media ${theme.media.tablet} {
       width: 270px;
       height: 270px;
    }
`;

