import React from 'react';
import './CreateBook.css';


class CreateBook extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            author: ''
        }
    }

    // use arrow function to avoid binding issues
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // use arrow function to avoid binding issues
    handleSubmit = (event) => {
        event.preventDefault();
        //passes in state to App.jsx
        this.props.createNewBook(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Book Title:</label>
                    <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
                <label>Author:</label>
                    <input name="author" type="text" value={this.state.author} onChange={this.handleChange} />
                <button type="submit" value="Submit">Create Book</button>
            </form>
        );
    }
}

export default CreateBook;