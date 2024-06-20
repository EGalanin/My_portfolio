import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type ExperiencePropsType = {
    name: string
    text: string
    location: string
    time: string
    period: string
}

export const Experience = (props: ExperiencePropsType) => {
    return (
        <StyledExperience>
            <FlexWrapper wrap={'wrap'} justify={'space-between'} >
                <div>
                    <Name>{props.name}</Name>
                    <Text>{props.text}</Text>
                    <Location>{props.location}</Location>
                </div>
                <div>
                    <Time>{props.time}</Time>
                    <Period>{props.period}</Period>
                </div>
            </FlexWrapper>


        </StyledExperience>
    );
};

const StyledExperience =styled.div`

`;

const Name = styled.h4`

`;

const Text = styled.span`

`;

const Location = styled.span`

`;

const Time = styled.span`
    width: 84px;
    height: 24px;
    gap: 0px;
    border-radius: 10px;
    opacity: 0px;
    background: #D7FFE0;


`;

const Period = styled.span`

`;
