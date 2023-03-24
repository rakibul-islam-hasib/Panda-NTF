import React from 'react';
import './Artist.css';
import cover from '../../assets/cover.png';
import artist_img from '../../assets/artist.png';
import views from '../../assets/views.png';
const Artist = (props) => {
    return (
        <div>
            <div className="artist-card">
                <div className="artist-card-img">
                    <div className="cover">
                        <img src={cover} alt="" />
                    </div>
                    <div className="profile">
                        <img src={artist_img} alt="" />
                    </div>
                </div>
                <div className="name">
                    <h1>{props.name}</h1>
                </div>
                <div className="views">
                    <img src={views} alt="" />
                    <p>{props.view}</p>
                </div>
            </div>
        </div>
    );
};

export default Artist;