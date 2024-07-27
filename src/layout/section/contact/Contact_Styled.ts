import styled from 'styled-components';
import {Button} from '../../../components/Button';
import {theme} from '../../../styles/Theme';
import {font} from '../../../styles/common/Common';

const Contact = styled.section`
  justify-content: center;
  padding: 100px 0;

  @media ${theme.media.tablet} {
    padding: 30px 0;
  }
  

  ${Button} {
    width: 150px;
    height: 30px;
    border-radius: 15px;
    background-color: ${theme.colors.projectBg};
    border: 1px solid ${theme.colors.colorFont};
    transition: ${theme.animations.transition};

    &:hover {
      transform: scale(1.2);
      color: ${theme.colors.colorActive};
      border: 1px solid ${theme.colors.accentColor};
    }

    &:focus-visible {
      outline: 1px solid ${theme.colors.accentColor};
    }
  }
`;

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`;

const Field = styled.input`
  width: 100%;
  padding: 7px 15px;
  color: ${theme.colors.colorFont};
  border: 1px solid ${theme.colors.colorFont};
  background-color: ${theme.colors.projectBg};
  ${font({weight: 300, Fmax: 18, Fmin: 14})}
  line-height: 26px;

  &:focus-visible {
    outline: 1px solid ${theme.colors.accentColor};
  }
`;

export const S = {
    Contact,
    Form,
    Field
}