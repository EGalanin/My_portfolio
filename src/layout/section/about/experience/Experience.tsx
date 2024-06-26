import React from "react";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
const LinkItemsExperience = ['imgText', 'imgLocation', 'imgPeriod'];

type ExperiencePropsType = {
    name: string;
    text: string;
    location?: string;
    time: string;
    period: string;
};

export const Experience = (props: ExperiencePropsType) => {
    return (
        <StyledExperience>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <div>
                    <Name>{props.name}</Name>
                    <div>
                        <Text>
                            <Icon
                                iconId={LinkItemsExperience[0]}
                                width={"10"}
                                height={"10"}
                                viewBox={"0 0 10 10"}
                            />
                            {props.text}</Text>
                        <Location>
                            <Icon
                                iconId={LinkItemsExperience[1]}
                                width={"12"}
                                height={"10"}
                                viewBox={"0 0 12 10"}
                            />
                            {props.location}</Location>
                    </div>
                </div>
                <SpanWrapper>
                    <Time>{props.time}</Time>
                    <Period>
                        <Icon
                            iconId={LinkItemsExperience[2]}
                            width={"12"}
                            height={"12"}
                            viewBox={"0 0 12 12"}
                        />
                        {props.period}
                    </Period>
                </SpanWrapper>
            </FlexWrapper>
            <Separator/>
        </StyledExperience>
    );
};

const StyledExperience = styled.div`
    margin-bottom: 20px;
`;

const Name = styled.h4`   
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 1px;
    text-align: left;

`;

const Text = styled.span`    
    font-size: 12px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 1px;
    text-align: left;

`;

const Location = styled.span`   
    font-size: 12px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 1px;
    text-align: left;

`;

const SpanWrapper = styled.div`
    display: flex;
    flex-direction: column;  
    align-items: end;
    gap: 15px;
`;

const Time = styled.div`
    width: 84px;
    height: 24px;
    border-radius: 10px;
    font-size: 9px;
    font-weight: 600;
    line-height: 26px;
    text-align: center;
    color: #018C0F;

    background: #d7ffe0;
`;

const Period = styled.div` 
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 1px;
    text-align: left;
    width: 200px;
    height: 17px; 
    
`;



const Separator = styled.hr`
    margin-top: 15px;
    color: black;

`;