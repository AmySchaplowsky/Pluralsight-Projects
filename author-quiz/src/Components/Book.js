import React from 'react';

function Book(props) {
    return (
        <div className="answer"
             onClick={() => {props.onClick(props.title)}}>
            <h4>{props.title}</h4>
        </div>
    )
}

export default Book;