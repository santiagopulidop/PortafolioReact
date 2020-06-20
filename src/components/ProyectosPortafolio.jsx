import React from "react";
import tribute from "../images/tribute.png";
import landingPage from "../images/landingpage.png";
import survey from "../images/survey.png";
import documentation from "../images/documentation.png";

function ProyectosPortafolio() {
  return (
    <div id="portafolio">
      <div className="row">
        <div id="tribute-page" className="col-sm-12 col-md-6 col-lg-4 proyecto">
          <a
            href="https://santiagopulidop.github.io/tribute_page/"
            target="_blank"
          >
            <div className="card m-0">
              <img className="card-img-top" src={tribute} alt="Tribute Page" />
              <div className="card-body">
                <h5 className="card-title text-center font-weight-bold">
                  Tribute Page
                </h5>
              </div>
            </div>
          </a>
        </div>
        <div id="landing-page" className="col-sm-12 col-md-6 col-lg-4 proyecto">
          <a
            href="https://santiagopulidop.github.io/LandingPage/"
            target="_blank"
          >
            <div className="card m-0">
              <img
                className="card-img-top"
                src={landingPage}
                alt="landingPage"
              />
              <div className="card-body">
                <h5 className="card-title text-center font-weight-bold">
                  Landing Page
                </h5>
              </div>
            </div>
          </a>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 proyecto" id="survey-form">
          <a
            href="https://santiagopulidop.github.io/SurveyForm/"
            target="_blank"
          >
            <div className="card m-0">
              <img className="card-img-top" src={survey} alt="survey" />
              <div className="card-body">
                <h5 className="card-title text-center font-weight-bold">
                  Survey Form
                </h5>
              </div>
            </div>
          </a>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4 proyecto"
          id="documentation-page"
        >
          <a
            href="https://santiagopulidop.github.io/TechnicalDocumentationPage/"
            target="_blank"
          >
            <div className="card m-0">
              <img className="card-img-top" src={documentation} alt="survey" />
              <div className="card-body">
                <h5 className="card-title text-center font-weight-bold">
                  Documentation Page
                </h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProyectosPortafolio;
