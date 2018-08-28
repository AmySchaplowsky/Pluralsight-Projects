import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

class Button extends React.Component {
    handleClick = () => {
        this.props.onClickFunction(this.props.incrementValue);
    };

    render() {
        return (
            <button className="btn btn-secondary" onClick={this.handleClick}>
                +{this.props.incrementValue}
            </button>
        );
    };
}

export default Button;