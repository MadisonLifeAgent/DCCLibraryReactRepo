import React from 'react';
import './CreateBook.css';


class CreateBook extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            book_title: '',
            author: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({book_title: event.target.book_title});
        this.setState({author: event.target.author})
    }

    handleSubmit(event) {
        alert('A book was added:  ' + this.state.book_title);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Book Title: 
                    <input type="text" value={this.state.book_title} onChange={this.handleChange} />
                </label>
                <label>
                    Author: 
                    <input type="text" value={this.state.author} onChange={this.handleChange} />
                </label>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default CreateBook;