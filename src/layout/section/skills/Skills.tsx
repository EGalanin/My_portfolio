import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";

const skillItems = ['typeHTML', 'typeCSS', 'typeJS', 'typeReact', 'typeBootstrap', 'typeTailwind', 'typeVSCode', 'typeSAAS', 'typeGit', 'typeGitHub', 'vector', 'greensock'];

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <Text> Technologies I’ve been working with recently</Text>
                <FlexWrapper wrap={'wrap'} justify={'space-between'} >
                    {skillItems.map((item) => {
                        return (
                            <Skill iconId={item} />
                        )
                    })}
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 100vh;
    text-align: center;
`;

const Text = styled.h3`
    color: ${theme.colors.colorFont};   
    font-size: 32px;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
    margin-bottom: 148px;
`;


