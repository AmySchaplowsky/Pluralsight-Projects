import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import _ from 'underscore';
import registerServiceWorker from './registerServiceWorker';
import AddAuthorForm from "./Components/AddAuthorForm";

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/marktwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            "The Adventures of Huckleberry Finn",
            "The Adventures of Tom Sawyer",
            "Roughing It"
        ]
    },
    {
        name: 'William Shakespeare',
        imageUrl: 'images/authors/williamshakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            "Macbeth",
            "Romeo and Juliet",
            "Hamlet"
        ]
    },
    {
        name: 'Stephen King',
        imageUrl: 'images/authors/stephenking.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            "The Shinning",
            "The Standing",
            "It"
        ]
    },
    {
        name: 'Charles Dickens',
        imageUrl: 'images/authors/charlesdickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            "A Christmas Carol"
        ]
    },
    {
        name: 'Joseph Conrad',
        imageUrl: 'images/authors/josephconrad.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            "Heart of Darkness"
        ]
    },
    {
        name: 'J.K. Rowling',
        imageUrl: 'images/authors/jkrowling.jpg',
        imageSource: 'Wikimedia Commons',
        books: [
            "Harry Potter"
        ]
    }
];

function getTurnData(authors) {
    const allBooks = authors.reduce(function (p, c, i) {
        return p.concat(c.books);
    }, []);
    const fourRandomBooks = _.shuffle(allBooks).slice(0, 4);
    const answer = _.sample(fourRandomBooks);

    return {
        books: fourRandomBooks,
        author: authors.find((author) =>
            author.books.some((title) =>
                title === answer))
    }
}

function reducer(state = {
    authors,
    turnData: getTurnData(authors),
    highlight: ''
}, action) {
    switch (action.type) {
        case 'ANSWER_SELECTED':
            const isCorrect = state.turnData.author.books.some((book) => book === action.answer);
            return Object.assign({}, state,
                {
                    highlight: isCorrect ? 'correct' : 'wrong'
                });
        case 'CONTINUE':
            return Object.assign({}, state,
                {
                    turnData: getTurnData(state.authors),
                    highlight: ''
                });
        case 'ADD_AUTHOR':
            return Object.assign({}, state,
                {
                    authors: state.authors.concat(action.author)
                });
        default:
            return state;
    }
}

let store = Redux.createStore(reducer);

ReactDOM.render(
    <BrowserRouter>
        <ReactRedux.Provider store={store}>
            <Fragment>
                <Route exact path="/" component={AuthorQuiz}/>
                <Route path="/add" component={AddAuthorForm}/>
            </Fragment>
        </ReactRedux.Provider>
    </BrowserRouter>,
    document.getElementById('root'));

registerServiceWorker();
