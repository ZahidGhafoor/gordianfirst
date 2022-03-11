import React from 'react'
import "./Clients.scss"

import c1 from "../../Assets/c1"
import c2 from "../../Assets/c2"
// import c3 from "../../Assets/c3"
// import c4 from "../../Assets/c4"
import c5 from "../../Assets/c5"
import c6 from "../../Assets/c6"
import c7 from "../../Assets/c7"
import c8 from "../../Assets/c8"
import c9 from "../../Assets/c9"
import c10 from "../../Assets/c10"
import c11 from "../../Assets/c11" 

const Clients = (props) => {
  return (
   <>
   <div ref={props.client} className="client__container">
      <div className="heading">Our Clients</div>
      <p className="para">LEADING BRANDS TRUST ON PLAXONIC</p>
      <div className="imgs">
          <img src={c1} alt="" className="img1" />
          <img src={c2} alt="" className="img1" />
          <img src={c11} alt="" className="img1" />
          <img src={c10} alt="" className="img1" />
          <img src={c5} alt="" className="img1" />
          <img src={c6} alt="" className="img1" />
          <img src={c7} alt="" className="img1" />
          <img src={c8} alt="" className="img1" />
          <img src={c9} alt="" className="img1" />
      </div>
   </div>
   </>
  )
}

export default Clients