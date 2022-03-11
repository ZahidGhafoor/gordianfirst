import React from 'react'
import "./Services.scss"

// Imgs
import land from "../../Assets/land.png"
import custom from "../../Assets/custom.png"
import maintain from "../../Assets/maintain.png"
import microsite from "../../Assets/microsite.png"
import mobile from "../../Assets/mobile.png"
import optimize from "../../Assets/optimize.png"

const arr = [
    {
        img: custom,
        heading: "Landing Page ",
        para: "Make a lasting first impression, get your landing page designed by us. Boost your marketing campaign with our landing page optimization services.",
    },
    {
        img: land,
        heading: "Webiste Devlopment",
        para: "Our designers and developers really make the website of your dreams come true.If you’re low on imagination, don’t worry because our designers are always high on it",
    },
    {
        img: mobile,
        heading: "App Devlopment",
        para: "Mobile applications are our speciality. Armed with the latest technology, we leave no stone unturned to develop awesome mobile applications.",
    },
    {
        img: maintain,
        heading: "Microsite Devlopment",
        para: "Mobile applications are our speciality. Armed with the latest technology, we leave no stone unturned to develop awesome mobile applications.",
    },
    {
        img: microsite,
        heading: "Webiste Maintainance",
        para: "Mobile applications are our speciality. Armed with the latest technology, we leave no stone unturned to develop awesome mobile applications.",
    },
    {
        img: optimize,
        heading: "Website Optimization",
        para: "Mobile applications are our speciality. Armed with the latest technology, we leave no stone unturned to develop awesome mobile applications.",
    },
]

const Services = (props) => {
    return (
        <div ref={props.service} className="service__container">
            <div className="heading">OUR SERVICES</div>
            <div className="para">Spread across six diverse lines of service, DesignFort makes sure your business gains the traction that it deserves. We leave no stone unturned and ensure your business objectives are met with the best architecture supporting its growth. Whether you need to build your brand from scratch or just need a few tools to add some polish to your processes, your search for cost effective business solutions ends with us.</div>
            <div className="cards">
                {
                    arr.map((data , i) => {
                        return (
                            <div className="card" key={i}>
                                <img src={data.img} alt="" className="card__logo" />
                                <div className="headingg">{data.heading}</div>
                                <div className="paraa">
                                    {data.para}

                                </div>
                                <div className="read">Read More</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services