import styled from 'styled-components';
import {SocialLink} from '../../components/socialLink/SocialLink_Styled';
import {theme} from '../../styles/Theme';
import {Logo, StyledIcon} from '../../components/logo/Logo';

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99999;
  padding-top: 30px;

  ${SocialLink} {
    @media ${theme.media.tablet} {
      display: none;
    }
  }
  // ${StyledIcon} {
  //   @media ${theme.media.tablet} {
  //     z-index: -1;
  //   }
  // }
  
`;

export const S = {
    Header
}