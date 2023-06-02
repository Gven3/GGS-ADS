import styled from "styled-components";

export const StyledSection = styled.div`
  width: 100%;
  padding: 25vh 120px 0;
  display: flex;
  align-items: center;
`;

export const StyledSecondSectionContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  img {
    position: relative;
    transition: 0.6s;
  }
  .activePhoto {
    top: 0;
  }

  .staticPhoto {
    top: 300px;
    opacity: 0;
  }
`;
