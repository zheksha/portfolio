import React from "react";
import ReactTooltip from "react-tooltip";

const AboutMe = () => {
  return (
    <div className="aboutme  m-0 p-3 bg-white">
      <div className="row">
        <h4 className="header-title mt-2 mb-3">Hello World !</h4>

        <div className="col-md-6 pr-5 pb-3">
          <h4 className="text-primary font-weight-bold">I'm Ulan Z.</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed.
          </p>
          <button
            className="btn btn-sm btn-soft-primary"
            data-tip
            data-for="download"
          >
            <i className="fas fa-file-download"></i> Download CV
          </button>
        </div>
        <div className="col-md-6">
          <p>
            <span className="personal-detail-title">Name</span>
            <span className="personal-detail-info">Ulan Zhekshenbek uulu</span>
          </p>
          <p>
            <span className="personal-detail-title">Spoken languages</span>
            <span className="personal-detail-info">
              English - Turkish - Russian - Kyrgyz
            </span>
          </p>
          <p>
            <span className="personal-detail-title">Location</span>
            <span className="personal-detail-info">USA</span>
          </p>
        </div>
      </div>
      <ReactTooltip id="download" place="top" effect="solid">
        Download CV in .pdf file
      </ReactTooltip>
    </div>
  );
};

export default AboutMe;
