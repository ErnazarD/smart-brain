import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';
const Logo = () => {
    return (
        <div className='ma4 mt0 '>
             <Tilt className='Tilt '>
            <div>
                <h1><img  style={{padding:'1px'}}alt='logo' src={brain}></img></h1>
            </div>
            </Tilt>
        </div>
    );

};

export default Logo;