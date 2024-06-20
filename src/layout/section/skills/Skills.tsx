import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";

const skillItems = ['typeHTML', 'typeCSS', 'typeJS', 'typeReact', 'typeBootstrap', 'typeTailwind', 'typeVSCode', 'typeSAAS', 'typeGit', 'typeGitHub', 'vector', 'greensock'];

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <span> Technologies I’ve been working with recently</span>
            <FlexWrapper wrap={'wrap'} justify={'space-between'} >
                {skillItems.map((item) => {
                    return (
                        <Skill iconId={item} />
                    )
                })}
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #d7b6f6;
    min-height: 100vh;
    text-align: center;
`;


