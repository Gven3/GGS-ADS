import styled from "styled-components";
import { THEME } from "../../themeColors";

export const StyledMainDiv = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  font-family: "FiraGO";
  gap: 110px;
  position: relative;
  left: ${({ invisible }: any) => (invisible ? "0" : "300px")};
  opacity: ${({ invisible }: any) => (invisible ? "1" : "0")};
  transition: 0.6s;
  h3 {
    font-size: 24px;
  }
`;

export const StyledPromisesDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  div {
    display: flex;
    align-items: center;
    gap: 28px;
    width: max-content;
    svg {
      width: 36px;
      height: 36px;
      color: #0a2640;
      color: ${({ theme }: any) => THEME[theme].buttonColor};
    }
  }
`;

export const StyledButton = styled.button`
  width: 286px;
  height: 60px;
  font-size: 20px;
  background-color: ${({ theme }: any) => THEME[theme].buttonColor};
  border: 2px solid #0a2640;
  border-radius: 56px;
  color: white;
  margin-top: 100px;
  cursor: pointer;
`;
