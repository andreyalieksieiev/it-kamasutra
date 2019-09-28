import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: "Hi, ho are you?", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11},
    {id: 1, message: "fhjgff", likesCount: 12},
    {id: 1, message: "rrrrrrrr", likesCount: 13},
    {id: 1, message: "qqqqqqq", likesCount: 12}
]

let dialogs = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Viktor"},
    {id: 6, name: "Valera"}
];

let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your it-kamasutra"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"},
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
