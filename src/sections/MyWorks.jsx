import React from "react";
import QuotesCarousel from "../components/QuotesCarousel";
import nazprotein from "../images/portfolio/nazprotein.jpg";
import ata from "../images/portfolio/ata.jpg";

const MyWorks = () => {
  return (
    <div className="myworks  mt-3 p-3 bg-white">
      <div className="row">
        <h4 className="header-title mt-2 mb-3">My Works and Review</h4>

        <div className="row mb-2">
          <div className="col-md-3">
            <a href="https://nazbar.netlify.app" target="blank">
              <div className="image-box ">
                <img
                  className="image"
                  src={nazprotein}
                  alt="Cover for nazprotein"
                />
              </div>
            </a>
          </div>
          <div className="description-box col-md-9">
            <a
              href="https://nazbar.netlify.app"
              target="blank"
              className="description-title"
            >
              E-Commerce website for NAZ Protein (in development)
            </a>
            <p className="description-text ">
              Helping startup to launch e-commerce platform for Naz Protein
              Bars, starting from styleguiding to full product launch. Features
              of website includes tracking order shipment with 3rd party APIs,
              monitoring quantity of protein bars in stock, applying coupons and
              discounts.
              <span className="tech-stack">
                Tech Stack: React, Redux, Node.JS, MongoDB, Stripe API, RESTful
                API, JWT, BCrypt, SASS, Bootstrap.
              </span>
            </p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-3">
            <a href="http://zheksha-todo.herokuapp.com/" target="blank">
              <div className="image-box ">
                <img className="image" src={ata} alt="Cover for ATA" />
              </div>
            </a>
          </div>
          <div className="description-box col-md-9">
            <a
              href="http://zheksha-todo.herokuapp.com/"
              target="blank"
              className="description-title"
            >
              ATA 1.1 (Another Todo App)
            </a>
            <p className="description-text">
              Fullstack todo app created while teaching fullstack development.
              With features like Loging and Signing in with decryption and
              tokenization. CRUD operations with axios. Deployed on heroku using
              free tier.
              <span className="tech-stack">
                Tech Stack: React, Node.JS, MongoDB, RESTful API, Heroku, JWT,
                BCrypt, Bootstrap, Fontawesome.
              </span>
            </p>
          </div>
        </div>

        <div className="row mt-5 text-center d-flex flex-column justify-content-center align-items-center">
          <QuotesCarousel />
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
//
//
//
//

/*
import brand from "../images/portfolio/1.jpg";

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

*/
