import React from 'react'
import "./NavBar.scss"
import { NavLink, useNavigate } from "react-router-dom"


import logo from "../../Assets/Logo.png"
import Mobile from './Mobile'

const NavBar = (props) => {

  const navigate = useNavigate()

  const push = () => {
    navigate('success');
  }

  return (
    <>
      <div className="navbar__container">
        <div className="left">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="right">
          <NavLink onClick={props.homescroll} to="/" className="link">Home</NavLink>
          <NavLink onClick={props.aboutscroll} to="/about" className="link">About</NavLink>
          <NavLink onClick={push} to="/products" className="link">Products</NavLink>
          <NavLink onClick={props.clientscroll} to="/client" className="link">Clients</NavLink>
          <NavLink onClick={props.contactscroll} to="/contact" className="link">Contact</NavLink>

        </div>
      </div>
      <div className="mobile__nav">
        <Mobile />
      </div>
    </>
  )
}

export default NavBar