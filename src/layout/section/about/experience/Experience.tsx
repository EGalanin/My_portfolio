import React from "react";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import {S} from '../About_Styled';

const LinkItemsExperience = ['imgText', 'imgLocation', 'imgPeriod'];

type ExperiencePropsType = {
    name: string;
    text: string;
    location?: string;
    time: string;
    period: string;
};

export const Experience: React.FC<ExperiencePropsType> = (props: ExperiencePropsType) => {
    return (
        <S.Experience>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <div>
                    <S.Name>{props.name}</S.Name>
                    <div>
                        <S.SubText>
                            <Icon
                                iconId={LinkItemsExperience[0]}
                                width={"10"}
                                height={"10"}
                                viewBox={"0 0 10 10"}
                            />
                            {props.text}</S.SubText>
                        <S.Location>
                            <Icon
                                iconId={LinkItemsExperience[1]}
                                width={"12"}
                                height={"10"}
                                viewBox={"0 0 12 10"}
                            />
                            {props.location}</S.Location>
                    </div>
                </div>
                <S.SpanWrapper>
                    <S.Time>{props.time}</S.Time>
                    <S.Period>
                        <Icon
                            iconId={LinkItemsExperience[2]}
                            width={"12"}
                            height={"12"}
                            viewBox={"0 0 12 12"}
                        />
                        {props.period}
                    </S.Period>
                </S.SpanWrapper>
            </FlexWrapper>
            <S.Separator/>
        </S.Experience>
    );
};

