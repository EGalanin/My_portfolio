import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Experience} from "./experience/Experience";



export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle>About Me</SectionTitle>
            <Text>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</Text>
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
                        period={'Sep 2021 - Dec 2021                                      '}/>



            <Title>Education</Title>

            <Experience name={'SEO / SEM Specialist'}
                        text={'HAAPS'}
                        location={'Bengaluru'}
                        time={'Internship'}
                        period={'Sep 2021 - Dec 2021'}/>


        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    min-height: 100vh;
    background-color: #a3d4d6;
    justify-content: center;
   
`;

const Text = styled.p`

`;

const Title = styled.h3`
    text-align: center;
`;
