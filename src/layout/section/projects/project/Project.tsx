import React from 'react';
import styled from "styled-components";

type projectPropsType = {
    src: string
    title: string
    text: string
    stack: string
}

 export const Project = (props: projectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt={''} />
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Stack>{props.stack}</Stack>
            <Link href={''}>Live Preview</Link>
            <Link href={''}>View Code</Link>
        </StyledProject>
    );
};

 const StyledProject = styled.div`
     background-color: #ca8c8c;
     width: 373px;
     height: 567px;
     border-radius: 20px;
     opacity: 0px;
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
 
 `;

 const Text = styled.p`
 
 `;

 const Stack = styled.span`
 
 `;

 const Link = styled.a`
 
 `;




