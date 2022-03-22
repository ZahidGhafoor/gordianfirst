import React from "react";
import "./Details.scss"


import TextField from "@mui/material/TextField";

const Details = () => {
  return (
    <>
      <div className="details__container">
        <div className="left">
          <div className="heading">MERN Stack Developer</div>
          <div className="min__details">
            Permanent | Lahore, Karachi, Islamabad | January 6, 2022 - March 31,
            2022 | Software & Web Development
          </div>

          <div className="details">
            <div className="details__heading">Job Description:</div>
            <ul className="list">
              <li>
                Building interactive consumer data from multiple systems and
                Restfully abstract to the UI through a Node.js backend.
              </li>
              <li>
                Define code architecture decisions to support a high-performance
                and scalable product with a minimal footprint.
              </li>
              <li>Address and improve any technical issues.</li>
              <li>
                Collaborate well with engineers, researchers, and data
                implementation specialists to design and create advanced,
                elegant and efficient systems.
              </li>
              <li>
                Previous working experience as a MEAN Stack Developer for
                minimum 2 years.
              </li>
              <li>BSc degree in Computer Science or similar relevant field.</li>
              <li>In depth knowledge of NodeJS, ExpressJS or Restify.</li>
              <li>
                Experience implementing applications using Angular 1 or React.
              </li>
              <li>
                Experience creating front end applications using HTML5, Angular,
                LESS/SASS.
              </li>
              <li>
                Experience with modern frameworks and design patterns, minimum
                one-year experience with MEAN Fullstack paradigm.
              </li>
              <li>Experience with Dockers/Jenkins would be a plus.</li>
              <li>
                Creating secure RESTful-based web services in XML and JSON,
                Javascript, JQuery.
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="right__heading">Submit Your Application</div>

          <div className="inputs">
            <div className="first">
              <TextField
                id="standard-basic"
                label="FULL NAME "
                variant="standard"
              />
            </div>
            <div className="first">
              <TextField
                id="standard-basic"
                label="EMAIL "
                variant="standard"
              />
            </div>
            <div className="first">
              <TextField
                id="standard-basic"
                label="PHONE "
                variant="standard"
              />
            </div>
            <div className="first">
              <TextField
                id="standard-basic"
                label="MESSAGE"
                variant="standard"
              />
            </div>
          </div>

          <div className="attachment">
              Attach CV
          </div>

          <button className="submit">
              SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;
