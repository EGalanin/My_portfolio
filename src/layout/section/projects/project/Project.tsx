import React from "react";
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

const LinkItems = ['akarIcon', 'akarIconGitHub'];


type projectPropsType = {
    src: string;
    title: string;
    text: string;
    stack: string;
};

export const Project = (props: projectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt={""}/>
            <ContentWrapper>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Stack>{props.stack}</Stack>
                <WrapperLink>
                    <Link href={""}>
                        <Icon
                            iconId={LinkItems[0]}
                            width={"20"}
                            height={"20"}
                            viewBox={"0 0 20 20"}
                        />
                        Live Preview
                    </Link>
                    <Link href={""}>
                        <Icon
                            iconId={LinkItems[1]}
                            width={"20"}
                            height={"20"}
                            viewBox={"0 0 20 20"}
                        />
                        View Code
                    </Link>
                </WrapperLink>
            </ContentWrapper>

        </StyledProject>
    );
};

const StyledProject = styled.div`
    background: #363636;
    box-shadow: 2px 2px 100px 0px #00000033;


    width: 373px;
    height: 567px;
    border-radius: 20px;
    //opacity: 0px;
    margin: 5px;
`;

const Image = styled.img`
    width: 375px;
    height: 260px;
    gap: 0px;
    border-radius: 20px 20px 0px 0px;
    opacity: 0px;
`;

const Title = styled.h3`    
    font-size: 28px;
    font-weight: 500;
    line-height: 26px;
    text-align: center;  
`;

const Text = styled.p`    
    font-size: 18px;
    font-weight: 300;
    line-height: 26px;
    text-align: left;
`;

const Stack = styled.span`  
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;

`;

const Link = styled.a`
    display: flex;
    align-items: center;
    color: azure;
    gap: 5px;    
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;

`;

const WrapperLink = styled.div`
    display: flex;
    justify-content: space-around;
`;

const ContentWrapper = styled.div`
    display: flex;
    padding: 15px;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
`;
