import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>For any questions please mail me:</SectionTitle>
            <StyledForm>
                <Field placeholder={'Your name'}/>
                <Field  placeholder={'Your email'}/>
                <Field as={'textarea'} placeholder={'Your text'}/>
                <Button type={'submit'}>Send message</Button>

            </StyledForm>


        </StyledContact>
    );
};

const StyledContact = styled.section`
    background-color: #8ba175;
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

