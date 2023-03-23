import React from 'react';
import './Navbar.css';
import logo from '../../assets/Panda Esport 1.png';
const Navbar = () => {
    return (
        <div className='container'>
            <div className="logo">
                <img src={logo} alt="" />
                <h3>Panda NFT</h3>
            </div>
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>Discover</li>
                    <li>Docs</li>
                    <li>Blog</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="btn">
                <button>Connect Wallet</button>
            </div>
        </div>
    );
};

export default Navbar;