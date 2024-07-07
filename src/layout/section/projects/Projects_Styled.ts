import styled from "styled-components";
import {font} from "../../../styles/common/Common";
import {theme} from "../../../styles/Theme";

const Projects = styled.section``;

const SubText = styled.h3`
    ${font({weight: 400, Fmax: 32, Fmin: 18})}
    line-height: 26px;
    text-align: center;
    margin-bottom: 113px;
`;

const Project = styled.div`
    background: ${theme.colors.projectBg};
    box-shadow: 2px 2px 100px rgba(12, 10, 10, 0.2);
    width: 373px;
    height: 567px;
    border-radius: 20px;
    margin-bottom: 65px;
    @media ${theme.media.mobile} {
        margin: 10px auto;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 260px;
    border-radius: 20px 20px 0 0;
    opacity: 0px;
`;

const Title = styled.h3`
    ${font({weight: 500, Fmax: 28, Fmin: 18})}
    line-height: 26px;
    text-align: center;
    padding: 27px 0 17px;
`;

const Text = styled.p`
    ${font({weight: 300, Fmax: 18, Fmin: 14})}
    line-height: 26px;
    text-align: left;
    max-width: 314px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
`;

const Stack = styled.span`
    ${font({weight: 300, Fmax: 14, Fmin: 12})}
    line-height: 26px;
    text-align: left;
    padding: 15px 0;
`;

const Link = styled.a`
    display: flex;
    align-items: center;
        // color: ${theme.colors.colorLink};
    gap: 5px;
    ${font({weight: 400, color: `${theme.colors.colorLink}`, Fmax: 16, Fmin: 13})}
    line-height: 26px;
    text-align: left;
`;

const WrapperLink = styled.div`
    display: flex;
    justify-content: space-around;
`;

const ContentWrapper = styled.div`
    display: flex;
    padding: 0 28px;
    flex-direction: column;
    justify-content: flex-start;
`;

export const S = {
    Projects,
    SubText,
    Project,
    Image,
    Title,
    Text,
    Stack,
    Link,
    WrapperLink,
    ContentWrapper
}