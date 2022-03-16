import React from 'react'
import "./Copy.scss"


import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Copy = () => {
    let a = 2;

    switch (a) {
        case "1":
            a = 1;
            break;
        case 1:
            a = 'one';
            break;
        case 2:
            a = 'two';
            break;

        default:
            a = 'not found';
            break;
    }
    console.log(`The value is ${a}`);

    return (
        <div className="copy__container">
            <div className="left">
                <FacebookIcon className='social' />
                <TwitterIcon className='social' />
                <LinkedInIcon className='social' />
                <InstagramIcon className='social' />
            </div>
            <div className="middle">
                Copyright © 2022. FS Highrise
            </div>
        </div>
    )
}

export default Copy