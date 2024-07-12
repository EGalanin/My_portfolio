import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Toggle = styled.div`    
    align-items: center;
    margin-bottom: 20px;
    
    @media ${theme.media.tablet} {
        position: absolute;
        top: 70px;
        right: 15px;           
    }
`;
const Input = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;

    &:checked + label {
        background: #bdcf7f;
    }

    &:checked + label:after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
    }

`;

const Label = styled.label`
    cursor: pointer;
    text-indent: -9999px;
    width: 60px;
    height: 30px;
    background: grey;
    display: block;
    border-radius: 15px;
    position: relative;
    
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        background: #fff;
        border-radius: 15px;
        transition: 0.3s;
    }
    
    &:active:after {
        width: 60px;
    }
`;

export const S = {
    Toggle,
    Input,
    Label
}