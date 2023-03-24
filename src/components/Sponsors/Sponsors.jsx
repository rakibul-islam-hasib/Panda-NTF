import React from 'react';
import './Sponsors.css';
import credit_card from '../../assets/sponsors/credit-card.png'
import megaphone from '../../assets/sponsors/megaphone.png'
import mony_exchange from '../../assets/sponsors/money-exchange.png'
import photos from '../../assets/sponsors/photos.png'
import visa from '../../assets/sponsors/visa.png'
const Sponsors = () => {
    return (
        <div className='sponsor'>
            <div className="img-container">
                <img src={credit_card} alt="google" />
                <img src={megaphone} alt="" />
                <img src={mony_exchange} alt="" />
                <img src={photos} alt="" />
                <img src={visa} alt="" />
            </div>
        </div>
    );
};

export default Sponsors;