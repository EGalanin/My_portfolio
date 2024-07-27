import styled from 'styled-components';
import {font} from '../../../styles/common/Common';
import {theme} from '../../../styles/Theme';

const About = styled.section`
  padding: 0 0 100px;
  
  @media ${theme.media.tablet} {
    padding: 0 0 30px;
  }

`;

const Text = styled.p`
  ${font({weight: 400, Fmax: 18, Fmin: 14})}
  line-height: 26px;
  text-align: left;
`;

const Title = styled.h3`
  ${font({weight: 700, color: `${theme.colors.titleFont}`, Fmax: 42, Fmin: 20})}
  line-height: 52px;
  letter-spacing: 1.5px;
  text-align: left;
  margin: 40px 0;
`;

const Experience = styled.div`
  margin-bottom: 20px;
`;

const Name = styled.h4`
  ${font({weight: 400, Fmax: 20, Fmin: 14})}
  line-height: 28px;
  letter-spacing: 1px;
  text-align: left;
`;

const SubText = styled.span`
  ${font({weight: 500, Fmax: 12, Fmin: 10})}
  line-height: 28px;
  letter-spacing: 1px;
  text-align: left;
`;

const Location = styled.span`
  ${font({weight: 500, Fmax: 12, Fmin: 10})}
  line-height: 28px;
  letter-spacing: 1px;
  text-align: left;
`;

const SpanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 15px;
`;

const Time = styled.div`
  width: 84px;
  height: 24px;
  border-radius: 10px;
  font-size: 9px;
  font-weight: 600;
  line-height: 26px;
  text-align: center;
  color: #018C0F;
  background: #d7ffe0;
`;

const Period = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 1px;
  text-align: left;
  width: 200px;
  height: 17px;
`;

const Separator = styled.hr`
  margin-top: 15px;
  color: black;
`;

export const S = {
    About,
    Text,
    Title,
    Experience,
    Name,
    SubText,
    Location,
    SpanWrapper,
    Time,
    Period,
    Separator
}