import React from 'react';
import photo from './../../../assets/img/photo.webp'
import {Container} from '../../../components/Container';
import {S} from './Main_Styled';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.Main id={'home'}>
            <Container>
                <S.MainWrapper>
                    {/*<FlexWrapper align={'center'} justify={'space-around'}>*/}
                    <S.TextWrapper>
                        <S.Item>Hi 👋,</S.Item>
                        <S.Item>My name is</S.Item>
                        <S.Name>Galanin Evgeniy</S.Name>
                        <S.MainTitle>
                            <p>A Frontend Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A Frontend Developer.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>
                    </S.TextWrapper>
                    <Tilt
                        className="background-stripes parallax-effect-glare-scale"
                        perspective={500}
                        glareEnable={true}
                        glareMaxOpacity={0.45}
                        scale={1.02}
                    >
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt=""/>
                        </S.PhotoWrapper>
                    </Tilt>
                    {/*</FlexWrapper>*/}
                </S.MainWrapper>
            </Container>
        </S.Main>
    );
};



