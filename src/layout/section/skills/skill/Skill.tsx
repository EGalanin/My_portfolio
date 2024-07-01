import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";



export const Skill = (props: {iconId: string}) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={'120'} height={'120'} viewBox={'0 0 120 120'} />
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    //display: flex;
    max-width: 200px;
    width: 100%;   
    //margin: 10px; 
    padding: 15px;
    flex-grow: 1;
    
    @media ${theme.media.mobile} {
        max-width: 130px;
    }
`;


