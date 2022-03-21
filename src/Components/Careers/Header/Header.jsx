import React from "react";
import "./Header.scss";
import header from "../../../Assets/carrer.svg";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header">
        <div className="left">
          <div className="heading">Careers at Gordian Sol.</div>
          <div className="para1">
            Are you passionate about building your career with opportunities to
            learn and lead?
          </div>
          <div className="para1 two">
            Join us at Gordain Sol - a multinational software development
            company based in Germany, with regional offices in Trukey, Malaysia
            and Pakistan.
          </div>
        </div>
        <div className="right">
          <img src={header} alt="" className="right__img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
