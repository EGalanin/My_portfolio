import React from "react";
import {Icon} from "../../../../components/icon/Icon";
import {S} from './../Projects_Styled';
const LinkItems = ['akarIcon', 'akarIconGitHub'];

type projectPropsType = {
    src: string;
    title: string;
    text: string;
    stack: string;
};

export const Project: React.FC<projectPropsType> = (props: projectPropsType) => {
    return (
        <S.Project>
            <S.Image src={props.src} alt={""}/>
            <S.ContentWrapper>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <S.Stack>{props.stack}</S.Stack>
                <S.WrapperLink>
                    <S.Link href={""}>
                        <Icon
                            iconId={LinkItems[0]}
                            width={"20"}
                            height={"20"}
                            viewBox={"0 0 20 20"}
                        />
                        Live Preview
                    </S.Link>
                    <S.Link href={""}>
                        <Icon
                            iconId={LinkItems[1]}
                            width={"20"}
                            height={"20"}
                            viewBox={"0 0 20 20"}
                        />
                        View Code
                    </S.Link>
                </S.WrapperLink>
            </S.ContentWrapper>
        </S.Project>
    );
};