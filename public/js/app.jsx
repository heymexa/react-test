import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

let data = [
    ['A', 'B', 'C'],
    ['1', '2', '3'],
    ['X', 'Y', 'Z']
];

ReactDOM.render(
    <App data={data} />,
    document.getElementById('app')
);
