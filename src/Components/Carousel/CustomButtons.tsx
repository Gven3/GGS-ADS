import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { ArrowProps, CarouselInternalState } from "react-multi-carousel";

interface CustomArrowProps extends ArrowProps {
  onMove?: (movement: number) => void;
  carouselState?: CarouselInternalState;
  next?: () => void;
  previous?: () => void;
}

export const ButtonGroup: React.FC<CustomArrowProps> = ({ next, previous, ...rest }) => {
  const currentSlide = rest.carouselState?.currentSlide ?? 0;

  return (
    <div className="carousel-button-group">
      <button className={currentSlide === 0 ? "disable" : "leftArrow"} onClick={() => previous?.()}>
        <BsArrowLeft />
      </button>
      <button className={currentSlide === 3 ? "disable" : "rightArrow"} onClick={() => next?.()}>
        <BsArrowRight />
      </button>
    </div>
  );
};
