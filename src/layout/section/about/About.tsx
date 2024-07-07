import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Experience} from "./experience/Experience";
import {Container} from "../../../components/Container";
import {S} from './About_Styled';

export const About: React.FC = () => {
    return (
        <S.About>
            <Container>
                <SectionTitle>About Me</SectionTitle>
                <S.Text>The Generator App is an online tool that helps you to export ready-made templates ready to work as
                    your future website. It helps you to combine slides, panels and other components and export it as a
                    set
                    of static files: HTML/CSS/JS.</S.Text>
                <S.Title>Work Experience</S.Title>

                <Experience name={'Junior Web Developer'}
                            text={'Dr. Rajkumar’s Learning App'}
                            location={'Bengaluru'}
                            time={'Full Time'}
                            period={'Sep 2021 - Dec 2021'}/>

                <Experience name={'Web Development Intern'}
                            text={'IonPixelz Web Solutions'}
                            location={'Bengaluru'}
                            time={'Internship'}
                            period={'Sep 2021 - Dec 2021'}/>

                <Experience name={'SEO / SEM Specialist'}
                            text={'HAAPS'}
                            location={'Bengaluru'}
                            time={'Internship'}
                            period={'Sep 2021 - Dec 2021'}/>


                <S.Title>Education</S.Title>

                <Experience name={'Bachelor in Electronics & Communication'}
                            text={'Bangalore Instutute of Technology'}
                            time={'Full Time'}
                            period={'Aug 2015 - Dec 2020'}/>
            </Container>
        </S.About>
    );
};


