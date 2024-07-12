import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from './Skills_Styled';

const skillItems = ['typeHTML', 'typeCSS', 'typeJS', 'typeReact', 'vector', 'typeBootstrap', 'typeTailwind', 'typeSAAS', 'typeGit', 'greensock', 'typeVSCode', 'typeGitHub', 'typeJS', 'typeJS'];

const SkillArray = skillItems.map((item, index) => {
    return (
        <Skill key={index} iconId={item}/>
    )
})

export const Skills: React.FC = () => {
    return (
        <S.Skills id={'techStack'}>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <S.Text> Technologies I’ve been working with recently</S.Text>
                {/*<FlexWrapper wrap={'wrap'} justify={'space-between'}>*/}
                <S.Wrapper>
                    {SkillArray}
                </S.Wrapper>
                {/*</FlexWrapper>*/}
            </Container>
        </S.Skills>
    );
};




