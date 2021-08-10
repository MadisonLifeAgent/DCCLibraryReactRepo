// index.js connects components to html file

// imports React library
import React from 'react';
import reactDom from 'react-dom';

const jsxElement = <h1>Our React App</h1>;

// render jsxElement by putting it into html tag with id 'root' in index.html
reactDom.render(jsxElement, document.getElementById('root'));

