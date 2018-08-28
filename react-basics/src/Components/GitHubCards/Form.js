import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class Form extends Component {
    state = {userName: ''};
    handleSubmit = (event) => {
        event.preventDefault();
        
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(resp => {
                    this.props.onSubmit(resp.data);
                }
            );
        
        this.setState({
            userName: ''
        });
    };

    render() {
        return (
            <form className="form-inline"
                  onSubmit={this.handleSubmit}>
                <input type="text"
                       value={this.state.userName}
                       onChange={(event) => this.setState(
                           {
                               userName: event.target.value
                           }
                       )}
                       placeholder="Github username"
                       className="form-control"/>
                <button type="submit"
                        className="btn btn-primary">Add card
                </button>
            </form>
        )
    }
}

export default Form;