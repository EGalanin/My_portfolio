import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";

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
    min-height: 50vh;
    //justify-content: center;
`;

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;    
    margin: 0 auto;
`;

const Field = styled.input`
    
`;

