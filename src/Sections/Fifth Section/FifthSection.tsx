import { useInView } from "react-intersection-observer";
import Article from "../../Components/Article/Article";
import { StyledFifthSection } from "./fifthSection.styled";

const FifthSection = () => {
  const { ref: videoRef, inView: videoInvisible } = useInView();

  return (
    <StyledFifthSection>
      <div ref={videoRef} className={videoInvisible ? "video videoStatic" : "video videoActive"}>
        ვიდეო
      </div>
      <Article />
    </StyledFifthSection>
  );
};

export default FifthSection;
