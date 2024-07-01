import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import {theme} from "../../styles/Theme";

export const SocialLink = (props: { socialItems:  Array<{name: string; viewbox: string}> }) => {
  return (
    <StyledSocialLink>
      <ul>
        {props.socialItems.map((item, index) => {
          return (
            <SocialItem key={index}>
              <Icon
                iconId={item.name}
                width={"30"}
                height={"30"}
                viewBox={item.viewbox}
              />
            </SocialItem>
          );
        })}
      </ul>
    </StyledSocialLink>
  );
};

export const StyledSocialLink = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
    list-style-type: none;
  }
`;

const SocialItem = styled.li`
        //background-color: ${theme.colors.primaryBg};
    border-radius: 50%;
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.colorFont};

    &:hover {
        color: ${theme.colors.colorActive};
        cursor: pointer;
        transform: translateY(-5px);
    }

`;


