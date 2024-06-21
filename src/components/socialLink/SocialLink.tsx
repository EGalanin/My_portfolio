import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const SocialLink = (props: { socialItems: Array<string> }) => {
  return (
    <StyledSocialLink>
      <ul>
        {props.socialItems.map((item, index) => {
          return (
            <li key={index}>
              <Icon
                iconId={item}
                width={"30"}
                height={"30"}
                viewBox={"0 0 30 30"}
              />
            </li>
          );
        })}
      </ul>
    </StyledSocialLink>
  );
};

const StyledSocialLink = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
    list-style-type: none;
  }
`;
