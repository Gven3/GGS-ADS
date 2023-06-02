import styled from "styled-components";
import { StyledSection } from "../Second Section/secondSection.styled";

export const StyledThirdSection = styled.div`
  width: 100%;
  padding: 20vh 120px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  text-align: center;
  p {
    position: relative;
    transition: 0.6s;
    left: ${({ invisible }: any) => (invisible ? "0" : "-100%")};
    transition: 1s;
  }
  .activeCarousel {
    position: relative;
    top: 0;
    opacity: 1;
    transition: 1s;
  }

  .staticCarousel {
    position: relative;
    top: 150px;
    opacity: 0;
    transition: 1s;
  }
`;
