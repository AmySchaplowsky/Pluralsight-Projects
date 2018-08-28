import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const state = {
    turnData: {
        books: ['This shining', 'IT', 'David Copperfield', 'Hamlet'],
        author: {
            name: 'Charles Dickens',
            imageUrl: 'images/authors/charlesdickens.jpg',
            imageSource: 'Wikimedia Commons',
            books: ['David Copperfield', 'A Tale Of Two Cities']
        }
    },
    highlight: 'correct',
    onAnswerSelected: () => {
    }
};

describe('Author Quiz', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AuthorQuiz {...state}/>, div);
    });
});