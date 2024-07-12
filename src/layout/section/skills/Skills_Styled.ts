import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/common/Common";

const Skills = styled.section`
    padding: 0 0 135px;
`;

const Skill = styled.div`
    //max-width: 200px;
    //width: 100%;
    padding: 15px;
    justify-self: center;
    align-self: center;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    justify-content: center;
    grid-auto-rows: minmax(167px, auto);
    gap: 10px;

    @media ${theme.media.mobile} {
        grid-template-columns: repeat(auto-fit, minmax(130px, auto));
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