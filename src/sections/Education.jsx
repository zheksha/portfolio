import React from "react";
import ReactTooltip from "react-tooltip";
import photshop from "../images/icons/adobe-photoshop-logo.svg";
import illustrator from "../images/icons/adobe-illustrator.svg";
import indesign from "../images/icons/adobe-indesign-logo.svg";

const Education = () => {
  const skills = [
    "react",
    "mongo",
    "node",
    "html",
    "sass",
    "css",
    "javascript",
    "redhat",
    "aws",
    "photoshop",
    "illustrator",
    "indesign",
    "figma",
  ];

  return (
    <div className="education  m-0 p-3 bg-white">
      <div className="row">
        <h4 className="header-title mt-2 mb-3">Education & Skills</h4>

        {/* WORK EXPERIENCE */}

        <div className="col-sm-6 ">
          <div className="d-flex flex-column align-items-start">
            <div className="d-flex flex-column align-items-center">
              <i className="fas fa-briefcase"></i>
              <h5>Experience</h5>
            </div>
            <div className="timeline">
              {/**********  1 **********/}

              <div className="time-item">
                <div className="item-info">
                  <div className="font-14">2017 - Present</div>
                  <h5 className="my-1 text-dark">
                    Frontend developer at Peaksoft
                  </h5>
                  <p className="mb-2 p-0">
                    Develop and implement highly-responsive components using
                    React, Redux, SASS and other technologies
                  </p>
                  <a
                    className="m-0"
                    target="blank"
                    href="https://www.peaksoft.us/"
                  >
                    <i className="fas fa-link"></i> Link to company website
                  </a>
                </div>
              </div>

              {/**********  2 **********/}

              <div className="time-item">
                <div className="item-info">
                  <div className="font-14">2013 - 2017</div>
                  <h5 className="my-1 text-dark">
                    Freelance Graphics and Web Designer
                  </h5>
                  <p className="mb-2 p-0">Links to my profiles</p>
                  <a
                    className="m-0"
                    target="blank"
                    href="https://graphicriver.net/user/zheksha"
                  >
                    <i className="fas fa-link"></i> Graphicriver
                  </a>
                  <a
                    className="m-0 ml-2"
                    target="blank"
                    href="https://creativemarket.com/users/zheksha"
                  >
                    <i className="fas fa-link"></i> CreativeMarket
                  </a>
                  <a
                    className="m-0 ml-2"
                    target="blank"
                    href="https://studio.envato.com/users/zheksha"
                  >
                    <i className="fas fa-link"></i> Envato Studio
                  </a>
                </div>
              </div>

              {/**********  3 **********/}

              <div className="time-item">
                <div className="item-info">
                  <div className="font-14">2010 - 2013</div>
                  <h5 className="my-1 text-dark">
                    Graphics Designer at Kutaalam
                  </h5>
                  <p className="p-0 mb-2">
                    Create designs, concepts and maintain company website
                  </p>
                  <a
                    className="m-0"
                    target="blank"
                    href="http://infomar1.beget.tech/en/kutaalam-eng/"
                  >
                    <i className="fas fa-link"></i> Link to company website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EDUCATION */}

        <div className="col-sm-6 ">
          <div className="d-flex flex-column align-items-start">
            <div className="d-flex flex-column align-items-center">
              <i className="fas fa-graduation-cap"></i>
              <h5>Education</h5>
            </div>
            {/*
            <p>
              <span className="personal-detail-title">Languages</span>
              <span className="personal-detail-info">
                English - Turkish - Russian - Kyrgyz
              </span>
            </p>*/}
            <div className="timeline">
              {/**********  1 **********/}

              <div className="time-item">
                <div className="item-info">
                  <div className="font-14">2009 - 2013</div>
                  <h5 className="my-1 text-dark">
                    Kyrgyz State Polytech University
                  </h5>
                  <p className="p-0 mb-2">
                    Computer technology and automated systems
                  </p>
                  <a
                    className="m-0"
                    target="blank"
                    href="https://kstu.kg/en/bokovoe-menju/faculties/faculty-of-information-technology"
                  >
                    <i className="fas fa-link"></i> Link to university website
                  </a>
                </div>
              </div>
              {/**********  2 **********/}

              <div className="time-item">
                <div className="item-info">
                  <div className="font-14">2004 - 2009</div>
                  <h5 className="my-1 text-dark">M. Subakojoev High School</h5>
                  <p className="mb-2 p-0">Secondary Education</p>
                  <a
                    className="m-0"
                    target="blank"
                    href="https://sapat.edu.kg/en/glavnaya-english/"
                  >
                    <i className="fas fa-link"></i> Link to school website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**********  List of technologies **********/}

      <div className="row mt-4 d-flex">
        <div className=" d-lg-flex justify-content-start flex-wrap">
          {skills.map((skill, index) => (
            <ReactTooltip key={index} id={skill} place="top" effect="solid">
              {skill.toUpperCase()}
            </ReactTooltip>
          ))}
          <button className="btn btn-link p-0" data-tip data-for="react">
            <i className="fab fa-react"></i>
          </button>
          <button className="btn btn-link p-0" data-tip data-for="mongo">
            <i className="icon-mongodb"></i>
          </button>
          <button className="btn btn-link p-0" data-tip data-for="node">
            <i className="fab fa-node"></i>
          </button>
          <button className="btn btn-link p-0" data-tip data-for="html">
            <i className="fab fa-html5"></i>
          </button>
          <button className="btn btn-link p-0" data-tip data-for="sass">
            <i className="fab fa-sass"></i>
          </button>
          <button className="btn btn-link p-0" data-tip data-for="css">
            <i className="fab fa-css3-alt"></i>
          </button>
          <button className="btn btn-link p-0" data-tip data-for="javascript">
            <i className="fab fa-js-square"></i>
          </button>
          <button className="btn btn-link p-0" data-tip data-for="redhat">
            <i className="fab fa-redhat"></i>
          </button>
          <button className="btn btn-link p-0" data-tip data-for="aws">
            <i className="fab fa-aws"></i>
          </button>
          <button className="btn btn-link p-0" data-tip data-for="figma">
            <i className="fab fa-figma"></i>
          </button>
          <button className="btn btn-link p-0" data-tip data-for="photoshop">
            <img className="fab fa-adobe " src={photshop} alt="photshop" />
          </button>
          <button className="btn btn-link p-0" data-tip data-for="illustrator">
            <img className="fab fa-adobe" src={illustrator} alt="illustrator" />
          </button>
          <button className="btn btn-link p-0" data-tip data-for="indesign">
            <img className="fab fa-adobe" src={indesign} alt="indesign" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;

// <div className="d-flex justify-content-center align-items-start">

// </div>
