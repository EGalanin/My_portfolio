import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from './Contact_Styled';

export const Contact: React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <SectionTitle>For any questions please mail me:</SectionTitle>
                <S.Form>
                    <S.Field placeholder={'Your name'} type={'text'}/>
                    <S.Field placeholder={'Your email'} type={'email'}/>
                    <S.Field as={'textarea'} placeholder={'Your text'}/>
                    <Button type={'submit'}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};