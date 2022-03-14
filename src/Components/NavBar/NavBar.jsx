import React from 'react'
import "./NavBar.scss"
import { NavLink, useLocation, useNavigate } from "react-router-dom"


import logo from "../../Assets/Logo.png"
import Mobile from './Mobile'

const NavBar = (props) => {

  const navigate = useNavigate()
  const { pathname, hash } = useLocation()


  return (
    <>
      <div className="navbar__container">
        <div className="left">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="right">
          <NavLink onClick={props.homescroll} to="/" className={pathname == "/" ? "activee" : "link"}>Home</NavLink>
          <NavLink onClick={props.aboutscroll} to="/#about" className={hash == "#about" ? "activee" : "link"}>About</NavLink>
          <NavLink to="/products" className={pathname == "/products" ? "activee" : "link"}>Products</NavLink>
          <NavLink onClick={props.clientscroll} to="/#clients" className={hash == "#clients" ? "activee" : "link"}>Clients</NavLink>
          <NavLink onClick={props.contactscroll} to="/#contact" className={hash == "#contact" ? "activee" : "link"}>Contact</NavLink>

        </div>
      </div>
      <div className="mobile__nav">
        <Mobile {...props} />
      </div>
    </>
  )
}

export default NavBar