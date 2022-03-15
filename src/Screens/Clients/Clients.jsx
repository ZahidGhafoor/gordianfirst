import React from 'react'
import "./Clients.scss"

import Rating from '@mui/material/Rating';

import Slider from "react-slick";

import face1 from "../../Assets/face1.jpg"
import face2 from "../../Assets/face2.jpg"
import face3 from "../../Assets/face3.jpg"
import face4 from "../../Assets/face4.jpg"
import face5 from "../../Assets/face5.jpg"
import face6 from "../../Assets/face6.jpg"


const arr = [
  {
    img: face1,
    heading: "Lorem ipsum dolor",
    name: "ALI GENTH",
    positon: "PRESIDENT"

  },
  {
    img: face4,
    heading: "Lorem ipsum dolor",
    name: "JIM WATSON",
    positon: "WEB-DEVELOPER"

  },
  {
    img: face2,
    heading: "Lorem ipsum dolor",
    name: "JOHN SMITH",
    positon: "VICE-PRESIDENT"


  },

  {
    img: face3,
    heading: "Lorem ipsum dolor",
    name: "STEVE BURNIS",
    positon: "AUTOMATION-ENGINEER"

  },
  {
    img: face4,
    heading: "Lorem ipsum dolor",
    name: "JIM WATSON",
    positon: "WEB-DEVELOPER"

  },
  {
    img: face5,
    heading: "Lorem ipsum dolor",
    name: "JIM WATSON",
    positon: "WEB-DEVELOPER"

  },


  {
    img: face6,
    heading: "Lorem ipsum dolor",
    name: "JON SNOW",
    positon: "BACKEND-DEVELOPER"

  },
  {
    img: face5,
    heading: "Lorem ipsum dolor",
    name: "JIM WATSON",
    positon: "WEB-DEVELOPER"

  },
  {
    img: face3,
    heading: "Lorem ipsum dolor",
    name: "STEVE BURNIS",
    positon: "AUTOMATION-ENGINEER"

  },
]


const Clients = (props) => {
  const [value, setValue] = React.useState(5);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
    ]
  };
  return (
    <>
      <div ref={props.client} className="client__container">
        <div data-aos="fade-up" data-aos-duration="1000" >
          <div className="heading">Latest Testimonials</div>
          <p className="para">What They're Saying</p>
        </div>
        <div className="slider">
          <Slider {...settings}>
            {
              arr.map((data) => {
                return (
                  <div className="cards">
                    <div className="card1">
                      <img src={data.img} alt="" className="face" />
                      <div className="rating">
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </div>
                      <div className="headingg">TOP QUALITY, BEAUTIFUL LOCATION</div>
                      <div className="paraa">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam dolore ipsam vitae ipsa repudiandae eaque voluptate aut distinctio praesentium! Labore ad non sapiente cumque commodi eius provident! Corrupti assumenda Labore ad non sapiente cumque commodi eius provident! Corrupti assumenda <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi qui magnam aliquid unde suscipit quidem, fugit repellendus sed sit!
                      </div>
                      <div className="name">Review from <br /> {data.name} - <span>{data.positon}</span></div>
                    </div>

                  </div>
                )
              })
            }



          </Slider>
        </div>
      </div>
    </>
  )
}

export default Clients