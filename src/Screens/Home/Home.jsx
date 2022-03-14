import React from 'react'
import "./Home.scss"
import Typical from 'react-typical'

// Imgs
import watsapp from "../../Assets/watsapp.png"
import main from "../../Assets/main2.jpg"
import NavBar from '../../Components/NavBar/NavBar'

const Home = (props) => {
  console.log("props are=====", props);
  return (
    <div ref={props.home} className="home__container">
      <NavBar {...props} />
      <img src={main} alt="" className="main__img" />
      <div className="data">
        <div className="text">Get a free &nbsp;

          <Typical

            steps={[
              'consult', 3000,
              'advise', 3000,
              'counsel', 3000,
              // 'suggestions', 2000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
          from an expert</div>
        <button className="home__btn">Get Your Product Started</button>
      </div>
      <img src={watsapp} alt="" className="watsapp" />
    </div>
  )
}

export default Home