import React from "react";
import "./Opening.scss"

const arr = [
  {
    title: "DevOps Engineer",
    min: 1,
    max: 5,
  },
  {
    title: "UI Designer (Web & Mobile)",
    min: 1,
    max: 5,
  },
  {
    title: "UI / Front End Development Engineer",
    min: 1,
    max: 3,
  },
  {
    title: "HR Operations Intern",
    min: 1,
    max: 7,
  },
  {
    title: "Ruby on Rails (ROR) Intern",
    min: 1,
    max: 2,
  },
  {
    title: "Digital Marketing Analyst / Strategist",
    min: 1,
    max: 4,
  },
  {
    title: ".NET MVC Software Engineer",
    min: 1,
    max: 5,
  },
  {
    title: "Business Analyst (Software Projects/ ERP)",
    min: 1,
    max: 4,
  },
  {
    title: "Full Stack JavaScript Senior Software Engineer (MEAN / MERN)",
    min: 1,
    max: 4,
  },
  {
    title: "Ruby on Rails Software Engineer",
    min: 1,
    max: 4,
  },
  {
    title: "Laravel + Vue/React Senior Software Engineer",
    min: 1,
    max: 8,
  },
  {
    title: "Sales Executive (Female)",
    min: 1,
    max: 2,
  },
  {
    title: "SQA Engineer",
    min: 1,
    max: 6,
  },
  {
    title: "Trainee IT Recruiter",
    min: 1,
    max: 3,
  },
  {
    title: "Content Writer (Software/IT)",
    min: 1,
    max: 3,
  },
  {
    title: "React Native + MongoDB Software Engineer",
    min: 1,
    max: 6,
  },
];

const Opening = () => {
  return (
    <div className="opening__container">
      <div className="header">
        <div className="heading">Interested in Joining Us?</div>
        <div className="para">
          Check out our current openings and apply to those that match your
          skills. If you don’t see a match, you are still welcome to share your
          resume at
          <strong> careers@gordiansol.com</strong> We continuously search our CV
          bank for new opportunities.
        </div>
      </div>

      <div className="openings">
        <div className="heading">Current Openings</div>

        <div className="jobs">
          {arr.map((data) => {
            return (
              <div className="job1">
                <div className="left">
                  <div className="upper head">{data.title}</div>
                  <div className="upper">
                    Minimum Experience: {data.min} to {data.max} years
                  </div>
                </div>
                <div className="right">
                  <button className="btn1">DETAILS</button>
                  <button className="btn1">APPLY NOW</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="dream">
          <div className="headingg">Can’t find Your Dream Position?</div>

          <div className="paraa">
            Get in touch to let us know what you’re looking for and one of our
            solutions architects will get back to you soon.
          </div>
          <button className="contact">CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default Opening;
