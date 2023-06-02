import Carousel, { CarouselInternalState } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PhotoDiv from "../PhotoDiv/PhotoDiv";
import React from "react";
import { ButtonGroup } from "./CustomButtons";
import { useInView } from "react-intersection-observer";

const PhotoCarousel = () => {
  const { ref: carouselRef, inView: carouselInvisible } = useInView();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div ref={carouselRef} className={carouselInvisible ? "activeCarousel" : "staticCarousel"}>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        arrows={false}
        partialVisible={true}
        customButtonGroup={<ButtonGroup />}
        renderButtonGroupOutside={true}
      >
        <PhotoDiv photo="/images/random1.png" />
        <PhotoDiv photo="/images/random2.png" />
        <PhotoDiv photo="/images/random1.png" />
        <PhotoDiv photo="/images/random2.png" />
        <PhotoDiv photo="/images/random1.png" />
        <PhotoDiv photo="/images/random2.png" />
      </Carousel>
    </div>
  );
};

export default PhotoCarousel;
