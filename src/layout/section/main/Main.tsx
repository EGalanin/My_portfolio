import React from 'react';
import photo from './../../../assets/img/photo.webp'
import {Container} from "../../../components/Container";
import {S} from './Main_Styled';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <S.MainWrapper>
                    {/*<FlexWrapper align={'center'} justify={'space-around'}>*/}
                    <S.TextWrapper>
                        <S.Item>Hi 👋,</S.Item>
                        <S.Item>My name is</S.Item>
                        <S.Name>Galanin Evgeniy</S.Name>
                        <S.MainTitle>A Web Developer. </S.MainTitle>
                    </S.TextWrapper>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                    {/*</FlexWrapper>*/}
                </S.MainWrapper>
            </Container>
        </S.Main>
    );
};



