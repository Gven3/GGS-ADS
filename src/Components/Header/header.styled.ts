import styled from "styled-components";
import { THEME } from "../../themeColors";
export const StyledHeader = styled.div`
  height: 15vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }: any) => THEME[theme].textColor};
  transition: 0.5s;
`;
export const StyledNavbar = styled.nav`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
`;

export const StyledNavMenu = styled.div`
  width: 60%;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    cursor: pointer;
    .darkmodeDiv {
      position: relative;
      display: flex;
      align-items: center;
      svg {
        position: absolute;
        top: 28px;
        left: 28px;
        scale: 1.2;
        color: ${({ theme }: any) => THEME[theme].textColor};
        animation: handSign 0.5s linear infinite alternate;
        cursor: auto;
      }
      @keyframes handSign {
        from {
          transform: translate(0, 0) rotate(-45deg);
        }
        to {
          transform: translate(20%, 20%) rotate(-45deg);
        }
      }
    }
    a {
      text-decoration: none;
      position: relative;
      color: ${({ theme }: any) => THEME[theme].textColor};
      &::after {
        content: "";
        width: 0;
        height: 2px;
        border-radius: 6px;
        background-color: ${({ theme }: any) => THEME[theme].textColor};
        position: absolute;
        bottom: -6px;
        left: 0;
        transition: 0.3s;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }
`;

export const StyledInputDiv = styled.div`
  position: relative;
  img {
    position: absolute;
    left: 16px;
    top: 13px;
  }
  input {
    height: 42px;
    width: 246px;
    padding-left: 40px;
    border: 1px solid #000000;
    border-radius: 22px;
    :focus {
      outline: none;
    }
  }
`;
