import Promises from "../../Components/Promises/Promises";
import { StyledSection, StyledSecondSectionContent } from "./secondSection.styled";
import { useInView } from "react-intersection-observer";

const SecondSection = () => {
  const { ref: photoRef, inView: photoInvisible } = useInView();

  return (
    <StyledSection>
      <StyledSecondSectionContent>
        <img
          src="/images/secondSectionImage.png"
          alt=""
          ref={photoRef}
          className={photoInvisible ? "activePhoto" : "staticPhoto"}
        />
        <Promises />
      </StyledSecondSectionContent>
    </StyledSection>
  );
};

export default SecondSection;
