import styled from 'styled-components';
import {theme} from '../styles/Theme';
import {font} from '../styles/common/Common';

export const SectionTitle = styled.h2`
  ${font({weight: 700, color: `${theme.colors.colorMain}`, Fmax: 48, Fmin: 22})}
  line-height: 26px;
  text-align: center;
  padding: 50px 0;

  @media ${theme.media.tablet} {
    padding: 20px 0;
  }

  // @media ${theme.media.mobile} and (orientation: landscape) {
  //   padding: 20px 0;
  // }

  
`;