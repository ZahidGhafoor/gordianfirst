import React from 'react'
import "./Home.scss"

// Imgs
import main from "../../Assets/main2.jpg"
import NavBar from '../../Components/NavBar/NavBar'

const Home = (props) => {
  console.log("props are=====", props);
  return (
    <div ref={props.home} className="home__container">
      <NavBar {...props} />
      <img src={main} alt="" className="main__img" />
      <div className="data">
        <div className="text">Get a free consultation from an expert</div>
        <button className="home__btn">Get Your Project Started</button>
      </div>
    </div>
  )
}

export default Home