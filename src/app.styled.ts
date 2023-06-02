import styled from "styled-components";
import { Theme } from "./themeContext";
import { THEME } from "./themeColors";

export const StyledBody = styled.div`
  width: 100%;
  height: auto;
  background: ${({ theme }: any) =>
      theme === "light" ? `url("/images/background.png")` : `url("/images/darkBackground.png")`}
    center;
  background-size: cover;
  background-color: ${({ theme }: any) => (theme === "light" ? `white` : `#1E1E1E`)};
  color: ${({ theme }: any) => THEME[theme].textColor};
  overflow-x: hidden;
`;
