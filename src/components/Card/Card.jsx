import React from 'react';
import './Card.css';
import card_img from '../../assets/img1.jpg'
import profile_img from '../../assets/profile.png'
import fire_img from '../../assets/fire.png'
const Card = () => {
    return (
        <div>
            <div className="card">
                <div className="card_images">
                    <div className="card-img">
                        <img src={card_img} alt="" />
                    </div>
                    <div className="card-offer-img">
                        <img src={fire_img} alt="" />
                        <h3>05 : 12 : 07 : 45</h3>
                    </div>

                </div>
                <div className="card_text">
                    <h5>"Hamlet Contemplates ...</h5>
                    <button>BSC</button>
                </div>
                <div className="profile">
                    <div className="card_img">
                        <div>
                            <img src={profile_img} alt="" />
                        </div>
                        <div>
                            <p>Creator</p>
                            <h3>SalvadorDali</h3>
                        </div>
                    </div>
                    <div className="card-sm-text">
                        <p>Current Bid</p>
                        <h4>4.89 ETH</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;