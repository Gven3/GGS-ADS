import { useContext } from "react";
import { StyledSection } from "../Second Section/secondSection.styled";
import { StyledFourthSection, StyledLogoDiv } from "./fourthSection.styled";
import { ThemeContext } from "../../themeContext";

const logos = [
  "/images/ariport.jpg",
  "/images/Bank_of_Georgia.png",
  "/images/Beko.png",
  "/images/borjomi.png",
  "/images/Caucasus_university.jpg",
  "/images/City_hall.png",
  "/images/Coca_cola.svg",
  "/images/Elit_electronics.jpg",
  "/images/Evex_Clinic.png",
  "/images/Evolution_gaming.png",
  "/images/G_post.png",
  "/images/H_M.png",
  "/images/Irao.png",
  "/images/Khareba_Winery.png",
  "/images/Made_in_georgia.png",
  "/images/McDonalds.png",
  "/images/porsche.png",
  "/images/Revenue_Service.png",
  "/images/Start_Up.png",
  "/images/TBC_Bank.png",
  "/images/Tbilisi_Jazz_fest.png",
  "/images/Tegeta_Motors.png",
  "/images/Toyota.png",
  "/images/Zedazeni.png",
];

const FourthSection = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledFourthSection theme={theme}>
      <StyledLogoDiv>
        <div className="logos">
          {logos.map((logo, index) => (
            <img key={index} src={logo} />
          ))}
        </div>
        <div className="logos">
          {logos.map((logo, index) => (
            <img key={index} src={logo} />
          ))}
        </div>
      </StyledLogoDiv>
    </StyledFourthSection>
  );
};

export default FourthSection;
