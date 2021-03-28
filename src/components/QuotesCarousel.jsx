import React from "react";
import { Fragment } from "react";
import { Carousel } from "react-bootstrap";

const QuotesCarousel = () => {
  return (
    <Fragment>
      <h5 className="m-0 ">
        <i className="fas fa-quote-right"></i>
      </h5>
      <Carousel
        className="carousel"
        indicators={false}
        controls={true}
        interval={7000}
        pause="hover"
      >
        <Carousel.Item className="slide-1">
          <div className="p-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
              purus nisi. Morbi blandit dignissim ultrices. Praesent sit amet
              nulla urna. Vestibulum viverra ligula odio, ac semper sapien
              bibendum at.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slide-2">
          <div className="p-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
              purus nisi. Morbi blandit dignissim ultrices. Praesent sit amet
              nulla urna. Vestibulum viverra ligula odio, ac semper sapien
              bibendum at.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slide-3">
          <div className="p-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
              purus nisi. Morbi blandit dignissim ultrices. Praesent sit amet
              nulla urna. Vestibulum viverra ligula odio, ac semper sapien
              bibendum at.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default QuotesCarousel;
