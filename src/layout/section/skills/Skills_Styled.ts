import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/common/Common";

const Skills = styled.section`
    margin-bottom: 135px;
`;

const Skill = styled.div`
    max-width: 200px;
    width: 100%;
    padding: 15px;
    flex-grow: 1;
    justify-self: center;
    align-self: center;

    @media ${theme.media.mobile} {
        max-width: 130px;
    }
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;

    @media ${theme.media.tablet} {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }

    @media ${theme.media.mobile} {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, 1fr);
        gap: 5px;
    }
`;

const Text = styled.h3`
    color: ${theme.colors.colorFont};
    ${font({weight: 400, Fmax: 32, Fmin: 18})}
    line-height: 26px;
    text-align: center;
    margin-bottom: 148px;
`;

export const S = {
    Skills,
    Skill,
    Wrapper,
    Text
}