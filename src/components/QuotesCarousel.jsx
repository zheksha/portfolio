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
              Great job on my project - performed the design changes to meet my
              exact requirements.
            </p>
            <p className="text-info">
              <em>
                crock2000, <span>studio.envato.com</span>
              </em>
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slide-2">
          <div className="p-2">
            <p>
              Awesome work, went above and beyond, very happy with the output.
              <p className="text-info">
                <em>
                  Kwuest, <span>studio.envato.com</span>
                </em>
              </p>
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slide-3">
          <div className="p-2">
            <p>
              Zheksha was very helpful and provided an excellent service.
              <p className="text-info">
                <em>
                  nlbrownjr, <span>studio.envato.com</span>
                </em>
              </p>
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default QuotesCarousel;
