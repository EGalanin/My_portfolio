import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>For any questions please mail me:</SectionTitle>
                <StyledForm>
                    <Field placeholder={'Your name'} type={'text'}/>
                    <Field  placeholder={'Your email'} type={'email'}/>
                    <Field as={'textarea'} placeholder={'Your text'}/>
                    <Button type={'submit'}>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`  
    justify-content: center; 
    padding-bottom: 30px;
`;

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;    
    margin: 0 auto;  
    
    textarea {
        resize: none;
        height: 155px;
    }
`;

const Field = styled.input`
    width: 100%;
    padding: 7px 15px;
    color: ${theme.colors.font};
    border: 1px solid #aaa5a5;
    background-color: #363636;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 26px;

    &:focus-visible {
        outline: 1px solid #aaa5a5;
    }


`;

