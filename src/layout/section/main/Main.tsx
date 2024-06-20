import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from './../../../assets/img/photo.webp'


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <Name>Hi 👋,
                        I am
                        Galanin Evgeniy
                                                     </Name>
                    <MainTitle>A Web Developer. </MainTitle>
                </div>

                <Photo src={photo} alt=""/>
            </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #89bdbd;
`;

const Name = styled.h2`

`;

const MainTitle = styled.h1`

`;

const Photo = styled.img`   width: 349px;
    height: 349px;
    gap: 0px;
    border-radius: 230px;
    opacity: 0px;
    border: 9px solid;

    //border-image-source: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%);



`;