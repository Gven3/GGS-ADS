import styled from "styled-components";
import { THEME } from "../../themeColors";

export const StyledFooter = styled.div`
  width: 100%;
  height: 300px;
  padding: 20px 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: any) => THEME[theme].footerColor};
  color: white;

  .footerDiv {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    align-items: center;
  }
  .footerContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 22px 0;
    border-top: 1px solid rgba(217, 217, 217, 0.5);
    border-bottom: 1px solid rgba(217, 217, 217, 0.5);
  }

  .contact {
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 40%;
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

  .short {
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  .socialMedia {
    display: flex;
    gap: 34px;
    svg {
      scale: 1.4;
    }
  }
  .footerFooter {
    width: 100%;
    display: flex;
    justify-content: space-between;
    p {
      display: flex;
      align-items: center;
      svg {
        margin: 0 6px;
      }
    }
  }
`;
