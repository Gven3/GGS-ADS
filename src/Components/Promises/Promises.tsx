import { useContext } from "react";
import { StyledButton, StyledMainDiv, StyledPromisesDiv } from "./promises.styled";
import { BsCheckCircleFill } from "react-icons/bs";
import { ThemeContext } from "../../themeContext";
import { useInView } from "react-intersection-observer";
const Promises = () => {
  const { theme } = useContext(ThemeContext);
  const { ref: promiseRef, inView: promiseInvisible } = useInView();

  return (
    <StyledMainDiv ref={promiseRef} invisible={promiseInvisible}>
      <h3>“კრეატიული მიდგომა და რეალური შედეგი.”</h3>
      <StyledPromisesDiv theme={theme}>
        <div>
          <BsCheckCircleFill /> <p>მომხმარებლებს ვაკავშირებთ საუკეთესო გუნდთან</p>
        </div>
        <div>
          <BsCheckCircleFill /> <p>ერთად ვეძებთ პრობლემას და გამოსავალს</p>
        </div>
        <div>
          <BsCheckCircleFill /> <p>ერთად ვქმნით უნიკალურ პროდუქტს</p>
        </div>
        <div>
          <BsCheckCircleFill /> <p>მომხმარებლებს ვაკავშირებთ საუკეთესო გუნდთან</p>
        </div>
        <div>
          <BsCheckCircleFill /> <p>ერთად ვეძებთ პრობლემას და გამოსავალს</p>
        </div>
        <div>
          <BsCheckCircleFill /> <p>ერთად ვქმნით უნიკალურ პროდუქტს</p>
        </div>
        <div>
          <BsCheckCircleFill /> <p>ერთად ვქმნით უნიკალურ პროდუქტს</p>
        </div>

        <StyledButton theme={theme}>დაგვიკავშირდით</StyledButton>
      </StyledPromisesDiv>
    </StyledMainDiv>
  );
};

export default Promises;
