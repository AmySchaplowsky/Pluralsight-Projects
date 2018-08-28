import React from 'react';
import './Turn.css';
import Book from "./Book";
import PropTypes from 'prop-types';

function Turn(props) {
    function highlightToBackgroundColor(highlight) {
        const mapping = {
            'none': '',
            'correct': 'green',
            'wrong': 'red'
        }
        return mapping[highlight];
    }

    return (
        <div className="row turn" style={{backgroundColor: highlightToBackgroundColor(props.highlight)}}>
            <div className="col-4 offset-1">
                <img src={props.author.imageUrl} className="authorImage" alt="Author"/>
            </div>
            <div className="col-6">
                {props.books.map((title, i) => <Book title={title} key={i} onClick={props.onAnswerSelected}/>)}
            </div>
        </div>
    );
}

Turn.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        imageSource: PropTypes.string.isRequired,
        books: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
    onAnswerSelected: PropTypes.func.isRequired,
    highlight: PropTypes.string.isRequired
};

export default Turn;