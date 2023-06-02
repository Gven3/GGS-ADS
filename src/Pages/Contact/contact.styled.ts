import styled from "styled-components";
import { THEME } from "../../themeColors";

export const StyledContact = styled.div`
  width: 100vw;
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
  header {
    text-align: center;
    color: ${({ theme }: any) => THEME[theme].textColor};
    h1 {
      font-size: 20px;
    }
    p {
      margin-top: 20px;
      font-size: 18px;
    }
  }

  .inputDiv {
    width: 70%;
    display: flex;
    gap: 80px;
    margin-top: 30px;

    .contact {
      display: flex;
      flex-direction: column;
      gap: 16px;
      div {
        display: flex;
        align-items: center;
        gap: 36px;
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    .leftSide {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 30px;
      .short {
        width: max-content;
        display: flex;
        flex-direction: column;
        gap: 22px;
      }
    }
    .rightSide {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;

      input,
      textarea {
        border: 1px solid;
        border-radius: 20px;
        border-color: ${({ theme }: any) => THEME[theme].textColor};
        background-color: ${({ theme }: any) => THEME[theme].backgroundColor};
        color: ${({ theme }: any) => THEME[theme].textColor};
        height: 42px;
        padding: 0 12px;
        &::placeholder {
          color: ${({ theme }: any) => THEME[theme].textColor};
          font-size: 18px;
        }
      }
      .third {
        padding: 12px 12px;
        height: 140px;
        vertical-align: text-top;
        resize: none;
      }
    }
  }
  .map {
    width: 100vw;
  }
`;
