import React from 'react'
import "./Home.scss"
import Typical from 'react-typical'

// Imgs
import watsapp from "../../Assets/watsapp.png"
import main from "../../Assets/main2.jpg"
import NavBar from '../../Components/NavBar/NavBar'

const Home = (props) => {
  console.log("props are=====", props);

  const val = '5'
  const val2 = "hello"

  let sum = String(val2) + val

  console.log("The value of addition is", sum);



  return (
    <div ref={props.home} className="home__container">
      <NavBar {...props} />
      <img src={main} alt="" className="main__img" />
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="data">
        <div className="text">Get a free <br />

          <Typical
            steps={[
              'counsel', 3000,
              'advice', 3000,
              'guidance', 3000,
              // 'suggestions', 2000,
            ]}
            loop={Infinity}
            wrapper="b"
            style={{ color: "red" }}
          />
          <br />
          from an expert</div>
        <button className="home__btn">Get Your Product Started</button>
      </div>
      <img src={watsapp} alt="" className="watsapp" />
    </div>
  )
}

export default Home