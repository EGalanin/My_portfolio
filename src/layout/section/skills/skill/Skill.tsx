import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from './../Skills_Styled';

export const Skill: React.FC<{ iconId: string }> = (props: { iconId: string }) => {
    return (
        <S.Skill>
            <Icon iconId={props.iconId} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>
        </S.Skill>
    );
};




