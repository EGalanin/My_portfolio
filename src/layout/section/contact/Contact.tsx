import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from './Contact_Styled';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if ( !form.current) return;

        emailjs
            .sendForm('service_fbsia7r', 'template_yruium6', form.current, {
                publicKey: 'GdgJz7eiB3a7OJAfg',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
            e.target.reset();
    };

    return (
        <S.Contact id={'contact'}>
            <Container>
                <SectionTitle>For any questions please mail me:</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={'Your name'} type={'text'} name={'user_name'}/>
                    <S.Field required placeholder={'Your email'} type={'email'} name={'email'}/>
                    <S.Field required as={'textarea'} placeholder={'Your text'} name={'message'}/>
                    <Button type={'submit'}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};