import styled from "styled-components";
import { StyledSection } from "../Second Section/secondSection.styled";

export const StyledFifthSection = styled(StyledSection)`
  flex-direction: column;
  padding-top: 10vh;
  .video {
    width: 100%;
    height: 660px;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: 0.6s;
  }
  .videoStatic {
    left: 0;
  }
  .videoActive {
    left: 100%;
  }
`;
