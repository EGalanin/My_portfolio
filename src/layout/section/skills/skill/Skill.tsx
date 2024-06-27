import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";



export const Skill = (props: {iconId: string}) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={'120'} height={'120'} viewBox={'0 0 120 120'} />
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    max-width: 200px;
    width: 100%;
    //background-color: #e4ca9a;
    margin: 10px;  
`;


