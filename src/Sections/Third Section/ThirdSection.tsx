import { useInView } from "react-intersection-observer";
import PhotoCarousel from "../../Components/Carousel/Carousel";
import { StyledSection } from "../Second Section/secondSection.styled";
import { StyledThirdSection } from "./thirdSection.styled";

const ThirdSection = () => {
  const { ref: carouselTextRef, inView: carouselTextInvisible } = useInView();

  return (
    <StyledThirdSection ref={carouselTextRef} invisible={carouselTextInvisible}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quam modi. Expedita minus debitis
        quaerat quidem neque odio quam omnis ducimus doloribus dolor. At consequuntur magni assumenda
        repellendus, repudiandae facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        aut omnis quo ipsam sapiente! Aliquid voluptate ullam sunt repellat, ad cupiditate dolorum quae
        molestias minus ratione sit veniam minima nihil blanditiis, dicta dignissimos delectus, iusto
        velit eius autem perferendis odio provident reiciendis. Velit voluptates magni quas doloribus,
        repellendus sunt, modi soluta eos sed nobis natus ex dignissimos autem voluptatem animi aut
        debitis ratione incidunt inventore odio illo illum aperiam exercitationem! Perspiciatis, vitae
        doloremque fuga officia ut reiciendis sint minima, iste iure cupiditate quasi eos omnis tempore
        consequuntur repellendus? Fugit repellendus quaerat id dignissimos exercitationem quidem deleniti
        beatae odit eius aliquam?
      </p>
      <PhotoCarousel />
    </StyledThirdSection>
  );
};

export default ThirdSection;
