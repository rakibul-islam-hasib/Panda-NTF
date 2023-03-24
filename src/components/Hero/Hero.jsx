import React from 'react';
import './Hero.css';

import Card from '../Card/Card';
const Hero = () => {
    return (
        <div className='hero-section'>
            <div className="hero-text">
                <h1>Discover a New Era of Crypto Currency</h1>
                <p>Panda NFT is the primier marketplace for NFT, which are digital items you can truly own. Digital items have existed for a long time, but never like this.</p>
                <button>Get Started</button>
            </div>
            {/* Card Section  */}
            <div className="card-high">
                <Card></Card>
            </div>
            <div className="card-low">
                <Card></Card>
            </div>

        </div>
    );
};

export default Hero;