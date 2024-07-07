import React from "react";
import {Icon} from "../icon/Icon";
import {S} from './SocialLink_Styled';

export const SocialLink: React.FC<{ socialItems: Array<{ name: string; viewbox: string }> }> = (props: {
    socialItems: Array<{ name: string; viewbox: string }>
}) => {
    return (
        <S.SocialLink>
            <ul>
                {props.socialItems.map((item, index) => {
                    return (
                        <S.SocialItem key={index}>
                            <Icon
                                iconId={item.name}
                                width={"30"}
                                height={"30"}
                                viewBox={item.viewbox}
                            />
                        </S.SocialItem>
                    );
                })}
            </ul>
        </S.SocialLink>
    );
};