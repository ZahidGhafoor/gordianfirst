import React from "react";
import "./Perks.scss";

import img1 from "../../../Assets/peducation.svg";
import img2 from "../../../Assets/pgym.svg";
import img3 from "../../../Assets/pmedicine.svg";
import img4 from "../../../Assets/ptime.svg";
import img5 from "../../../Assets/pgaming.svg";
import img6 from "../../../Assets/pincriment.svg";
import img7 from "../../../Assets/ptrip.svg";
import img8 from "../../../Assets/pwedding.svg";

const arr = [
  {
    img: img1,
    title: "Child Education Support",
    para: "Gordian Sol. plays its part in providing quality education to your children.",
  },
  {
    img: img2,
    title: "Gym Allowance",
    para: "We care about your health and fitness. Stay fit and ahead of your game!",
  },
  {
    img: img3,
    title: "Medical Coverage",
    para: "We hope you don’t have to use the benefit of having In-Patient/Out-Patient coverage!",
  },
  {
    img: img4,
    title: "Flexible Timings",
    para: "Can’t reach at 9 a.m. sharp? Don’t worry, join us whenever you can and enjoy our culture!",
  },
  {
    img: img5,
    title: "Gaming Facility",
    para: "The office doesn’t have to be boring. Light up the atmosphere and enjoy yourself with your team!",
  },
  {
    img: img6,
    title: "Annual Increment",
    para: "If you value us and the work you do, we will value the time you gave us!",
  },
  {
    img: img7,
    title: "Recreational Trips",
    para: "Gordain Sol. arranges annual leisure and recreational trips for employees.",
  },
  {
    img: img8,
    title: "Marriage Bonus",
    para: "Start your married life with a special allowance from Gordian Sol.",
  },
];

const Perks = () => {
  return (
    <>
      <div className="perks__container">
        <div className="heading">Perks and Benefits</div>

        <div className="para">
          Gordian Sol. cares about the financial and emotional well-being of its
          employees. While working with Gordian Sol, you get the following perks
          and benefits:
        </div>

        <div className="cards">
          {arr.map((data) => {
            return (
              <div className="card1">
                <img src={data.img} alt="" className="card__img" />
                <div className="title">{data.title}</div>
                <div className="card__para">{data.para}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="dream">
        <div className="headingg">Can’t find Your Dream Position?</div>

        <div className="paraa">
          Get in touch to let us know what you’re looking for and one of our
          solutions architects will get back to you soon.
        </div>
        <button className="contact">CONTACT US</button>
      </div>
    </>
  );
};

export default Perks;
