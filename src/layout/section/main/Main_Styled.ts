import styled from 'styled-components';
import {theme} from '../../../styles/Theme';
import {font} from '../../../styles/common/Common';
import backImg from '../../../assets/img/Abstract.png';

const Main = styled.section`
  padding: 200px 0 140px;
  display: flex;

  @media ${theme.media.tablet} {
    padding: 120px 0 30px;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${theme.media.mobile} {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  width: 70vw;  
`;

const Item = styled.div`
  ${font({weight: 700, color: `${theme.colors.colorMain}`, Fmax: 58, Fmin: 25})}
  letter-spacing: -1px;
  text-align: left;
  line-height: 70px;
  @media ${theme.media.tablet} {
    line-height: 40px;
  }
`;

const Name = styled.h2`
  ${font({weight: 700, Fmax: 58, Fmin: 25})}
  letter-spacing: -1px;
  text-align: left;
  background-image: linear-gradient(90deg, #13B0F5 50%, #E70FAA 86%);
  color: transparent;
  -webkit-background-clip: text;
  line-height: 70px;
  @media ${theme.media.tablet} {
    line-height: 40px;
  }
`;

const MainTitle = styled.h1`
  ${font({weight: 700, color: `${theme.colors.colorMain}`, Fmax: 48, Fmin: 20})}
  letter-spacing: -1px;
  text-align: left;
  line-height: 70px;
  @media ${theme.media.tablet} {
    line-height: 40px;
  }

  p {
    display: none;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  min-width: 628px;
  //width: 100%;
  min-height: 628px;
  //height: 100%;
  background-image: url(${backImg});
  background-repeat: no-repeat;
  background-size: cover;

  @media ${theme.media.tablet} {
    min-width: 428px;
    min-height: 428px;
  }
`;

const Photo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: 9px solid transparent;
  display: inline-flex;
  background-image: linear-gradient(180deg, #13B0F5 -2.06%, #E70FAA 100%), radial-gradient(circle at top left, #13B0F5, #E70FAA);
  background-origin: border-box;

  @media ${theme.media.tablet} {
    width: 270px;
    height: 270px;
  }
`;

export const S = {
    Main,
    MainWrapper,
    TextWrapper,
    Item,
    Name,
    MainTitle,
    PhotoWrapper,
    Photo
}