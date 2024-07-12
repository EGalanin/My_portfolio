import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Project} from "./project/Project";
import photo8 from '../../../assets/img/Rectangle-8.webp';
import photo18 from '../../../assets/img/Rectangle-18.webp';
import photo16 from '../../../assets/img/Rectangle-16.webp';
import photo24 from '../../../assets/img/Rectangle-24.webp';
import photo23 from '../../../assets/img/Rectangle-23.webp';
import photo22 from '../../../assets/img/Rectangle-22.webp';
import {Container} from "../../../components/Container";
import {S} from './Projects_Styled';

const projectImages = [photo18, photo16, photo8, photo24, photo23, photo22, photo22]

const arrayProjects = projectImages.map((item, index) => {
    return (
        <Project key={index} src={item}
                 title={'Project Tile goes here'}
                 text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                 stack={'Tech stack : HTML , JavaScript, SASS, React'}/>
    )
})

export const Projects: React.FC = () => {
    return (
        <S.Projects id={'projects'}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <S.SubText>Things I’ve built so far</S.SubText>
                <S.ProjectsWrapper>
                    {arrayProjects}
                </S.ProjectsWrapper>
            </Container>
        </S.Projects>
    );
};