import React from "react";
import ReactTooltip from "react-tooltip";

const AboutMe = () => {
  return (
    <div className="aboutme  m-0 p-3 bg-white">
      <div className="row">
        <h4 className="header-title mt-2 mb-3">Hello World !</h4>

        <div className="col-xl-6 pr-5 pb-3">
          <h4 className="text-primary font-weight-bold">I'm Ulan Z.</h4>
          <p>
            Adaptable professional with experience and proven knowledge of web
            design and web platform development. Aiming to high standards of web
            design, user experience and speed.
          </p>
          <button
            className="btn btn-sm btn-soft-primary"
            data-tip
            data-for="download"
          >
            <i className="fas fa-file-download"></i> Download CV
          </button>
        </div>
        <div className="col-xl-6">
          <div className="business-card">
            <table>
              <tr>
                <td className="me" data-tip data-for="namestory">
                  me <div class="vl-down"></div>
                </td>
                <td> </td>
                <td className="website" colSpan="2">
                  website<div class="vl-down"></div>
                </td>
              </tr>
              <tr>
                <td className="me-down"></td>
                <td> </td>
                <td className="website-down" colSpan="2"></td>
              </tr>
              <tr className="info">
                <td>ulan</td>
                <td>@</td>
                <td>zheksha</td>
                <td>.com</td>
              </tr>
              <tr className="social-up-row">
                <td colSpan="2"> </td>
                <td className="social-up"></td>
              </tr>
              <tr className="social-row">
                <td colSpan="2"> </td>
                <td className="social">
                  <div class="vl-up"></div>
                  <a
                    href="https://www.linkedin.com/in/zheksha/"
                    data-tip
                    data-for="linkedin"
                  >
                    linkedin
                  </a>
                </td>
                <td></td>
              </tr>
              <tr className="email-row">
                <td className="email" colSpan="4">
                  <div class="vl-up"></div>
                  <a href="mailto:ulan@zheksha.com" data-tip data-for="email">
                    email
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <ReactTooltip id="download" place="top" effect="solid">
        Download CV in .pdf file <i className="ml-1 far fa-file-pdf"></i>
      </ReactTooltip>

      <ReactTooltip id="email" place="left" effect="solid">
        Click to send email <i className="ml-1 fas fa-envelope"></i>
      </ReactTooltip>

      <ReactTooltip id="linkedin" place="left" effect="solid">
        Check my LinkedIn Profile <i className="ml-1 fab fa-linkedin"></i>
      </ReactTooltip>

      <ReactTooltip
        className="name-story"
        id="namestory"
        place="bottom"
        effect="solid"
      >
        <div>
          ✌️
          <p>I was born on a shore of Issyk Kul,</p>
          <p>and there is a wind that goes over the lake,</p>
          <p>and that wind has name, you guess it,</p>
          <p>it is "Ulan". My father gave me this name,</p>
          <p>so I remember where I came from.</p>
        </div>
      </ReactTooltip>
    </div>
  );
};

export default AboutMe;
