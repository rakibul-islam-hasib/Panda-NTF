import React from 'react';
import './AboutCard.css';
import NFT from '../../assets/nft.png';
const AboutCard = (props) => {
    return (
        <div>
            <div className="cardBody">
                <div className="cardImg">
                    <img src={NFT} alt="" />
                </div>
                <div className="card-text">
                    <h1>{props.name}</h1>
                    <p>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;