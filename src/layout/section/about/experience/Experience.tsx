import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/icon/Icon";
// import imgText from '../../../../assets/img/Vector-about1.svg';
// import imgLocation from '../../../assets/img/Vector-about3.svg';
// import imgPeriod from '../../../assets/img/Vector-about2.svg';
const LinkItemsExperience = ['imgText', 'imgLocation', 'imgPeriod'];

type ExperiencePropsType = {
  name: string;
  text: string;
  location: string;
  time: string;
  period: string;
};

export const Experience = (props: ExperiencePropsType) => {
  return (
    <StyledExperience>
      <FlexWrapper wrap={"wrap"} justify={"space-between"}>
        <SpanWrapper>
          <Name>{props.name}</Name>
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
        </SpanWrapper>
        <SpanWrapper>
          <Time>{props.time}</Time>
          <Period>
          <Icon
            iconId={LinkItemsExperience[2]}
            width={"12"}
            height={"12"}
            viewBox={"0 0 12 12"}
          />
            {props.period}</Period>
        </SpanWrapper>
      </FlexWrapper>
    </StyledExperience>
  );
};

const StyledExperience = styled.div``;

const Name = styled.h4``;

const Text = styled.span`
  margin-right: 40px;
`;

const Location = styled.span``;

const Time = styled.span`
  width: 84px;
  height: 24px;
  gap: 0px;
  border-radius: 10px;
  opacity: 0px;
  background: #d7ffe0;
`;

const Period = styled.span``;

const SpanWrapper = styled.div`
    display: flex;
    flex-direction: column;
    `;
