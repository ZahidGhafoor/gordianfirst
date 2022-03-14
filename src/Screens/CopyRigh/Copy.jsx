import React from 'react'
import "./Copy.scss"


import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Copy = () => {
    let func = function (...args) {
        console.log(args);
    }

    func(3); // [3]
    func(4, 5, 6, "jello"); // [4, 5, 6]


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