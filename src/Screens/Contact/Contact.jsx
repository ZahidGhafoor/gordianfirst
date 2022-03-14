import React, { useEffect, useState } from 'react';
import "./Contact.scss"

// import phone from "../../Assets/phone.png"
// import mail from "../../Assets/mail.png"
// import location from "../../Assets/location.png"

import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { mail } from '../../Api/mail';



const Contact = (props) => {
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false);
    const [val, setVal] = useState({
        fullName: "",
        email: "",
        message: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setVal((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const Validate = () => {

        const nameRegex = /^[A-Z ]{4,}$/i
        const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var messageregex = /^[a-zA-Z0-9 !@#$%^&*]{20,100}$/;

        const formError = {}
        if (!(val.fullName)) {
            formError.fullName = "Please Enter your Name"
        } else if (!nameRegex.test(val.fullName)) {
            formError.fullName = "Please Enter valid name"

        }
        if (!(val.email)) {
            formError.email = "Please Enter your Email"
        } else if (!emailregex.test(val.email)) {
            formError.email = "Please Enter valid email"
        }
        if (!(val.message)) {
            formError.message = "Please Enter your message"
        } else if (!messageregex.test(val.message)) {
            formError.message = "Please Enter minimum 20 characters"
        }

        setError(formError)
    }

    const done = async (event) => {
        Validate()
        event.preventDefault()
        const res = await mail(val)
        if (res.error != null) {
            console.log("something went wrong")
        } else {
            console.log("data send successfully", res.data)
        }

    }

    return (
        <>
            <div ref={props.contact} className="contact__container">
                <hr />
                <div className="headingg">Contact</div>
                <div className="para">Share your idea with us and let's get started right now!</div>
                <div className="bottom">
                    <div className="left">
                        <div className="phone">
                            <div className="img">
                                <PhoneIcon className="icon" />

                            </div>
                            <div className="right__text">
                                <div className="text">Phone</div>
                                <div className="number">+92300 4050673</div>
                                <div className="number">+92313 7565900</div>
                            </div>
                        </div>
                        <div className="phone">
                            <div className="img">
                                <MailIcon className="icon" />
                            </div>
                            <div className="right__text">
                                <div className="text">Email</div>
                                <div className="number">info@zahid.com</div>
                                <div className="number">support@zahid.com</div>
                            </div>
                        </div>
                        <div className="phone">
                            <div className="img">
                                <LocationOnIcon className="icon" />

                            </div>
                            <div className="right__text">
                                <div className="text">Location</div>
                                <div className="number">221 D, PIA Society,</div>
                                <div className="number">Lahore, 54000</div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="heading">
                            I'm always open to discussing product <br /> <span>design work or partnerships.</span>
                        </div>
                        <form onSubmit={done} className="form">
                            <div className="name">
                                <input name='fullName' value={val.fullName} onChange={handleChange} type="text" className="name__input" placeholder='Name *' />
                                <p className="error">{error?.fullName}</p>
                            </div>
                            <div className="name">
                                <input name='email' value={val.email} onChange={handleChange} type="email" className="name__input" placeholder='Email *' />
                                <p className="error">{error?.email}</p>
                            </div>
                            <div className="name">
                                <input name='message' value={val.message} onChange={handleChange} type="text" className="name__input" placeholder='Message *' />
                                <p className="error">{error?.message}</p>
                            </div>
                            <button className="btn">Submit</button>
                        </form>






                    </div>
                </div>
            </div>
        </>
    )
};

export default Contact;