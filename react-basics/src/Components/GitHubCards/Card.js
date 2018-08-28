import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img className="image"
                 src={props.avatar_url}/>
            <div className="name-and-company">
                <div className="name">
                    {props.name}
                </div>
                <div>
                    {props.company}
                </div>
            </div>
        </div>
    )
};

export default Card;