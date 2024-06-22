import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Experience} from "./experience/Experience";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";


export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <SectionTitle>About Me</SectionTitle>
                <Text>The Generator App is an online tool that helps you to export ready-made templates ready to work as
                    your future website. It helps you to combine slides, panels and other components and export it as a
                    set
                    of static files: HTML/CSS/JS.</Text>
                <Title>Work Experience</Title>

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


                <Title>Education</Title>

                <Experience name={'Bachelor in Electronics & Communication'}
                            text={'Bangalore Instutute of Technology'}
                            time={'Full Time'}
                            period={'Aug 2015 - Dec 2020'}/>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    min-height: 100vh;
    justify-content: center;
    color: ${theme.colors.projectFont}

`;

const Text = styled.p`

`;

const Title = styled.h3`
    text-align: center;
`;
