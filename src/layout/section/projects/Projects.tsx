import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Project} from "./project/Project";
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo8 from '../../../assets/img/Rectangle-8.webp';
import photo18 from '../../../assets/img/Rectangle-18.webp';
import photo16 from '../../../assets/img/Rectangle-16.webp';
import photo24 from '../../../assets/img/Rectangle-24.webp';
import photo23 from '../../../assets/img/Rectangle-23.webp';
import photo22 from '../../../assets/img/Rectangle-22.webp';
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";


const projectImages = [photo18, photo16, photo8, photo24, photo23, photo22]

const arrayProjects = projectImages.map((item) => {
    return (
        <Project src={item}
                 title={'Project Tile goes here'}
                 text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                 stack={'Tech stack : HTML , JavaScript, SASS, React'}/>
    )
})

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <Text>Things I’ve built so far</Text>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    {arrayProjects}
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    text-align: center;
    color: ${theme.colors.colorFont};
`;

const Text = styled.h3`
    // color: ${theme.colors.colorFont};   
    font-size: 32px;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
    margin-bottom: 113px;

`;
