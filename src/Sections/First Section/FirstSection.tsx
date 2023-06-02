import { useContext } from "react";
import Header from "../../Components/Header/Header";
import { StyledFirstSection } from "./firstSection.styled";
import { ThemeContext } from "../../themeContext";

const FirstSection = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledFirstSection>
      <img
        src={theme === "dark" ? "/images/darkcover.png" : "/images/cover.png"}
        alt=""
        className="cover"
      />
    </StyledFirstSection>
  );
};

export default FirstSection;
