import React from 'react'
import "./NavBar.scss"
import { NavLink } from "react-router-dom"


import logo from "../../Assets/download.svg"

const NavBar = (props) => {
  console.log("navbar=====", props)

  return (
    <div className="navbar__container">
      <div className="left">
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="right">
        <NavLink onClick={props.homescroll} to="/" className="link">Home</NavLink>
        <NavLink onClick={props.aboutscroll} to="/about" className="link">About</NavLink>
        <NavLink onClick={props.servicescroll} to="/service" className="link">Services</NavLink>
        <NavLink onClick={props.clientscroll} to="/client" className="link">Clients</NavLink>
        <NavLink onClick={props.contactscroll} to="/contact" className="link">Contact</NavLink>

      </div>
    </div>
  )
}

export default NavBar