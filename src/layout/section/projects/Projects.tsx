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


const projectImages = [photo18, photo16, photo8, photo24, photo23, photo22]

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <span>Things I’ve built so far</span>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                {projectImages.map((item) => {
                    return (
                        <Project src={item}
                                 title={'Project Tile goes here'}
                                 text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                                 stack={'Tech stack : HTML , JavaScript, SASS, React'}/>
                    )
                })}

            </FlexWrapper>

        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    background-color: #8e5959;
    min-height: 100vh;
    text-align: center;
`;
