import styled from "styled-components";
import { StyledSection } from "../Second Section/secondSection.styled";
import { THEME } from "../../themeColors";

export const StyledFourthSection = styled(StyledSection)`
  padding: 0 120px;
  height: max-content;
  background-color: ${({ theme }: any) => THEME[theme].backgroundColor};
`;

export const StyledLogoDiv = styled.div`
  position: relative;
  padding: 60px 0;
  overflow: hidden;
  white-space: nowrap;
  &:hover .logos {
    animation-play-state: paused;
  }
  .logos {
    display: inline-block;
    animation: logoScroll 30s infinite linear;

    img {
      height: 70px;
      margin-right: 60px;
      filter: grayscale(1);
      transition: all.5s;
      &:hover {
        filter: grayscale(0);
      }
    }
  }
  @keyframes logoScroll {
    form {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
