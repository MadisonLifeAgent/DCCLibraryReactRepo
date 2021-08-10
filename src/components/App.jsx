// class component
import React, { Component } from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';

// passed to index.js, which is then passed to index.html
class App extends Component {
    constructor(props){
        super(props);
        // new variable to store books as objects
        this.books = [
            {title: "Life After Google", author: "George Gilder" },
            {title: "Save the Cat", author: "Blake Snyder" },
            {title: "The 48 Laws of Power", author: "Robert Greene" }
        ];
        this.state = {
            // index number for book in books array we are viewing
            bookNumber: 1
        };
    }

    // renders via index.js to index.html
    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                
                <div className="row">
                    <div className="col-md-4">
                        {/* Button here to move to previous book */}
                    </div>
                    <div className="col-md-4">
                        {/* Display book with cover here */}
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                    <div className="col-md-4">
                        {/* Button here to move to next book */}
                    </div>
                </div>

            </div>
        )
    }
}

export default App;