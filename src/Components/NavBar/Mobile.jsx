import React from 'react'
import "./Mobile.scss"
import { NavLink } from 'react-router-dom'


import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import logo from "../../Assets/Logo.png"

import MenuIcon from '@mui/icons-material/Menu';

import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';

const Mobile = (props) => {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="mobile__container">
                <NavLink onClick={() => {
                    toggleDrawer(anchor, false)
                    setTimeout(() => { props.homescroll() }, 0);
                }} to="/" className="home">Home</NavLink>
                <NavLink onClick={() => {
                    toggleDrawer(anchor, false)
                    setTimeout(() => { props.aboutscroll() }, 0);
                }} to="/#about" className="home">About</NavLink>
                <NavLink to="/products" className="home">Products</NavLink>
                <NavLink onClick={() => {
                    toggleDrawer(anchor, false)
                    setTimeout(() => { props.clientscroll() }, 0);
                }} to="/#clients" className="home">Clients</NavLink>
                <NavLink onClick={() => {
                    toggleDrawer(anchor, false)
                    setTimeout(() => { props.contactscroll() }, 0);
                }} to="/#contact" className="home">Contact</NavLink>
            </div>

        </Box>
    );
    return (
        <>
            <div>
                {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <div className="burger" onClick={toggleDrawer(anchor, true)}>

                            <img src={logo} alt="" className="logo" />
                            <div><MenuIcon className='iconss' /></div>


                        </div>
                        <SwipeableDrawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            onOpen={toggleDrawer(anchor, true)}
                        >
                            {list(anchor)}
                        </SwipeableDrawer>
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}

export default Mobile