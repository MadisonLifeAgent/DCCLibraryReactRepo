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
            bookNumber: 0
        };
    }

    // arrow function to go to next book - use arrow functions for all class components
    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;

        // reset tempbook number so it does not go over length of objects array
        if(tempBookNumber  === this.books.length){
            tempBookNumber = 0;
        }

        // updates bookNumber and re-renders return below
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    // arrow function to go to previous book - use arrow functions for all class components
    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        
        // reset tempbook number so it does not go over length of objects array
        if(tempBookNumber < 0){
            tempBookNumber = this.books.length -1;
        }

        // updates bookNumber and re-renders return below
        this.setState({
            bookNumber: tempBookNumber
        });
    }
    // renders via index.js to index.html
    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                
                <div className="row">
                    <div className="col-md-4">
                        {/* Button here to move to previous book */}
                        <button onClick={this.goToPreviousBook}>Previous Book</button>
                    </div>
                    <div className="col-md-4">
                        {/* Display book with cover here */}
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                    <div className="col-md-4">
                        {/* Button here to move to next book */}
                        <button onClick={this.goToNextBook}>Next Book</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;