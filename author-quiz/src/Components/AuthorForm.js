import React, {Component} from 'react';

class AuthorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            books: [],
            bookTemp: ''
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddBook = this.handleAddBook.bind(this);
    }

    onFieldChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }

    handleAddBook(event) {
        this.setState(prevState => ({
                books: prevState.books.concat([prevState.bookTemp]),
                bookTemp: ''
            })
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="AddAuthorForm_input">
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="text"
                           id="name"
                           value={this.state.name}
                           onChange={this.onFieldChange}/>
                </div>
                <div className="AddAuthorForm_input">
                    <label htmlFor="imageUrl">
                        Image URL
                    </label>
                    <input type="text"
                           id="imageUrl"
                           value={this.state.imageUrl}
                           onChange={this.onFieldChange}/>
                </div>
                <div className="AddAuthorForm_input">
                    <label htmlFor="bookTemp">
                        Books
                    </label>
                    {this.state.books.map((book) => <p key={book}>{book}</p>)}
                    <input type="text"
                           id="bookTemp"
                           value={this.state.bookTemp}
                           onChange={this.onFieldChange}/>
                    <input type="button"
                           onClick={this.handleAddBook}
                           value="+"/>
                </div>
                <input type="submit" value="Add"/>
            </form>
        );
    }
}

export default AuthorForm;