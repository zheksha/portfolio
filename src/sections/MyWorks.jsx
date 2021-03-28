import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import QuotesCarousel from "../components/QuotesCarousel";
import brand from "../images/portfolio/1.jpg";

const MyWorks = () => {
  const [filtered, setFiltered] = useState("all");

  const uiux = (
    <React.Fragment key="uiux">
      <img name="uiux" className="portfolio-image" src={brand} alt="" />
      <img name="uiux" className="portfolio-image" src={brand} alt="" />
      <img name="uiux" className="portfolio-image" src={brand} alt="" />
    </React.Fragment>
  );

  const front = (
    <React.Fragment key="front">
      <img name="front" className="portfolio-image" src={brand} alt="" />
      <img name="front" className="portfolio-image" src={brand} alt="" />
      <img name="front" className="portfolio-image" src={brand} alt="" />
    </React.Fragment>
  );

  const back = (
    <React.Fragment key="back">
      <img name="back" className="portfolio-image" src={brand} alt="" />
      <img name="back" className="portfolio-image" src={brand} alt="" />
    </React.Fragment>
  );

  const des = (
    <React.Fragment key="des">
      <img name="des" className="portfolio-image" src={brand} alt="" />
      <img name="des" className="portfolio-image" src={brand} alt="" />
      <img name="des" className="portfolio-image" src={brand} alt="" />
      <img name="des" className="portfolio-image" src={brand} alt="" />
    </React.Fragment>
  );

  const all = [uiux, front, back, des];

  return (
    <div className="myworks  mt-3 p-3 bg-white">
      <div className="row">
        <h4 className="header-title mt-2 mb-3">My Works and Review</h4>
        <div className="col-md-6 text-center d-flex flex-column justify-content-center align-items-center">
          <QuotesCarousel />
        </div>
        <div className="col-md-6">
          <div className="row">
            <ul className="list-inline">
              <li className="list-inline-item">
                <button
                  onClick={() => setFiltered("all")}
                  name="all"
                  className="btn btn-link"
                >
                  All
                </button>
              </li>
              <li className="list-inline-item">
                <button
                  onClick={() => setFiltered("uiux")}
                  name="ui-ux"
                  className="btn btn-link"
                >
                  UI/UX Design
                </button>
              </li>
              <li className="list-inline-item">
                <button
                  onClick={() => setFiltered("front")}
                  name="front"
                  className="btn btn-link"
                >
                  Frontend
                </button>
              </li>
              <li className="list-inline-item">
                <button
                  onClick={() => setFiltered("back")}
                  name="back"
                  className="btn btn-link"
                >
                  Backend
                </button>
              </li>
              <li className="list-inline-item">
                <button
                  onClick={() => setFiltered("des")}
                  name="des"
                  className="btn btn-link"
                >
                  Graphics Design
                </button>
              </li>
            </ul>
          </div>
          <div className="row d-flex flex-wrap p-3 ">
            {filtered !== "all"
              ? all.filter((el) => el.key === filtered)
              : all.map((el) => el)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
