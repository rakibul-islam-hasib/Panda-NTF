import React from 'react';
import './OutlineButton.css';
const OutlineButton = (props) => {
    return (
        <div>
            <button className="btn-outline">{props.name}</button>
        </div>
    );
};

export default OutlineButton;