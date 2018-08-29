import React from 'react';
import './Contiune.css';

function Continue(props) {
    return (
        <div className="row continue">
            {
                props.show
                    ? <div className="col-11">
                        <button className="btn btn-primary btn-lg float-right continue" onClick={props.onContinute}>Continue</button>
                    </div>
                    : null
            } 
        </div>
    );
}

export default Continue;