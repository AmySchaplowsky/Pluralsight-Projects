import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import _ from 'underscore';
import registerServiceWorker from './registerServiceWorker';

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

const state = {
    turnData: getTurnData(authors),
    highlight: 'none',
    onAnswerSelected: onAnswerSelected
};

function onAnswerSelected(answer) {
    const isCorrect = state.turnData.author.books.some((book) => book === answer);
    state.highlight = isCorrect ? 'correct' : 'wrong';
    render();
}

function render() {
    ReactDOM.render(<AuthorQuiz {...state}/>, document.getElementById('root'));
}
render();
registerServiceWorker();
