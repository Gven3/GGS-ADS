import styled from "styled-components";

export const StyledArticleDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 84px 0 150px;

  .photoDiv {
    display: flex;
    gap: 40px;
    width: 40%;
    position: relative;
    div {
      width: 60%;
      height: 120%;
      background-color: black;
      position: absolute;
      border-radius: 24px;
      cursor: pointer;
      transition: 0.4s;
      &:hover {
        transform: translate(0, -30px);
      }
    }
    .first {
      background-color: red;
    }
    .second {
      background-color: blue;
      left: 40px;
    }
    .third {
      background-color: yellow;
      left: 80px;
    }
  }
  .article {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 50%;
    p {
      font-weight: 400;
      font-size: 18px;
    }
  }
`;
