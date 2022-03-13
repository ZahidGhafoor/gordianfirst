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

const Mobile = () => {
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
                <NavLink to="/" className="home">Home</NavLink>
                <NavLink to="/" className="home">About</NavLink>
                <NavLink to="/" className="home">Products</NavLink>
                <NavLink to="/" className="home">Clients</NavLink>
                <NavLink to="/products" className="home">Contact</NavLink>
                <div className="home"><CloseIcon className='icons' /></div>
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
                                <MenuIcon className='iconss' />

                    
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