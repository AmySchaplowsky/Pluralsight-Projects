import React from 'react';
import './AddAuthorForm.css';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import AuthorForm from "./AuthorForm";

function AddAuthorForm(props) {
    return (
        <div className="AddAuthorForm">
            <h1>Add Author</h1>
            <AuthorForm onAddAuthor={props.onAddAuthor}/>
        </div>
    );
}

function mapDispatchToProps(dispatch, props) {
    return {
        onAddAuthor: (author) => {
            dispatch({type: 'ADD_AUTHOR', author});
            props.history.push('/');
        }
    };
}

function mapStateToProps() {
    return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddAuthorForm));