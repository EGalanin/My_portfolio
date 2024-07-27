import React from "react";
import {Icon} from "../icon/Icon";
import {S} from './SocialLink_Styled';

// type socialItemType {
//     link: string
//     name: string
//     viewbox: string
// }

export const SocialLink: React.FC<{ socialItems: Array<{link: string; name: string; viewbox: string }> }> = (props: {
    socialItems: Array<{link: string; name: string; viewbox: string }>
}) => {
    return (
        <S.SocialLink>
            <ul>
                {props.socialItems.map((item, index) => {
                    return (
                        <S.SocialItem key={index}>

                            <a href={item.link} target={'_blank'}>
                                <Icon
                                    iconId={item.name}
                                    width={"30"}
                                    height={"30"}
                                    viewBox={item.viewbox}
                                />
                            </a>
                        </S.SocialItem>
                    );
                })}
            </ul>
        </S.SocialLink>
    );
};