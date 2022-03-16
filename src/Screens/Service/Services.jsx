import React from 'react'
import "./Services.scss"

import s1 from "../../Assets/s1.jpg";
import s2 from "../../Assets/s2.jpg";
import s3 from "../../Assets/s3.jpg";
import s4 from "../../Assets/s4.jpg";
import s5 from "../../Assets/s5.jpg";
import s6 from "../../Assets/s6.jpg";
import s7 from "../../Assets/s7.jpg";
import s8 from "../../Assets/s8.jpg";
import s9 from "../../Assets/s9.jpg";
import s10 from "../../Assets/s10.jpg";
import NavBar from '../../Components/NavBar/NavBar';

const arr = [
    {
        img: s1,
        "heading": "Song alfa a7III mirror less camera",
        "brand": "Brand:Sony",
        "price": "$4500"
    },
    {
        img: s2,
        "heading": "Canon EOS 80D Dslr Camera",
        "brand": "Brand:Canon",
        "price": "$500"
    },
    {
        img: s3,
        "heading": "Sony ILCE-A7RM3 Body camera",
        "brand": "Brand:Sony",
        "price": "$400"
    },
    {
        img: s8,
        "heading": "Song alfa a7III mirror less camera",
        "brand": "Brand:Sony",
        "price": "$4500"
    },
    {
        img: s4,
        "heading": "Canon alfa a7III mirror less camera",
        "brand": "Brand:Sony",
        "price": "$4500"
    },
    {
        img: s5,
        "heading": "Song alfa a7 mirror less camera",
        "brand": "Brand:Sony",
        "price": "$5000"
    },
    {
        img: s8,
        "heading": "Song alfa a7III mirror less camera",
        "brand": "Brand:Sony",
        "price": "$4500"
    },
    {
        img: s1,
        "heading": "Song alfa a7III mirror less camera",
        "brand": "Brand:Sony",
        "price": "$4500"
    },
    {
        img: s6,
        "heading": "Song alfa a7III mirror less camera",
        "brand": "Brand:Sony",
        "price": "$2500"
    },
    {
        img: s7,
        "heading": "Song alfa a7III mirror less camera",
        "brand": "Brand:Sony",
        "price": "$4500"
    },
    {
        img: s8,
        "heading": "Song alfa a7III mirror less camera",
        "brand": "Brand:Sony",
        "price": "$4500"
    },
    {
        img: s1,
        "heading": "Song alfa a7III mirror less camera",
        "brand": "Brand:Sony",
        "price": "$4500"
    },

    {
        img: s9,
        "heading": "Song alfa a7III mirror less camera",
        "brand": "Brand:Sony",
        "price": "$4500"
    },
    {
        img: s10,
        "heading": "Song alfa a7III mirror less camera",
        "brand": "Brand:Sony",
        "price": "$4500"
    },
]



const Services = (props) => {
    return (
        <>
            <NavBar {...props} />

            <div className="product__container">
                <div className="heading">
                    BROWSE TOP SELLING PRODUCTS
                </div>

                <div className="cards">
                    {
                        arr.map((data, index) => {
                            return (
                                <div key={index} className="card">
                                    <img src={data.img} alt="" className="card__img" />
                                    <div className="card__heading">{data.heading}</div>
                                    <div className="card__brand">{data.brand}</div>
                                    <div className="card__price">{data.price}</div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Services