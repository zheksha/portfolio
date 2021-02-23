import React from "react";

const AboutMe = () => {
  return (
    <div className="aboutme  m-0 p-3 bg-white">
      <div className="row">
        <h4 class="header-title mt-2 mb-3">Hello World !</h4>

        <div className="col-md-6 pr-5 pb-3">
          <h4 class="text-primary font-weight-bold">I'm Ulan Z.</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed.
          </p>
          <button className="btn btn-sm btn-soft-primary">
            <i className="fas fa-file-download"></i> Download CV
          </button>
        </div>
        <div className="col-md-6">
          <p>
            <span class="personal-detail-title">Name</span>
            <span class="personal-detail-info">Ulan Zhekshenbek uulu</span>
          </p>
          <p>
            <span class="personal-detail-title">Spoken languages</span>
            <span class="personal-detail-info">
              English - Turkish - Russian - Kyrgyz
            </span>
          </p>
          <p>
            <span class="personal-detail-title">Location</span>
            <span class="personal-detail-info">USA</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
