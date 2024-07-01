import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    color: ${theme.colors.titleFont};        
    //font-size: 48px;
    font-size: calc( (100vw - 576px) / (1600 - 576) * (48 - 22) + 22px);
    font-weight: 700;
    line-height: 26px;
    text-align: center;
    padding: 50px 0;
`;