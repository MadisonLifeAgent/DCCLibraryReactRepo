// index.js connects components to html file

// imports React library
import React from 'react';
import reactDom from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

// render App.jsx by putting it into html tag with id 'root' in index.html
reactDom.render(<App />, document.getElementById('root'));

