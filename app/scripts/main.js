'use strict';
var Model = require('./models/default'),
    model = new Model({ title: 'Title displayed with React' }),
    React = require('react'),
    GameApp = require('./components/game-app.jsx'),
    jQ = require('jquery');

React.renderComponent(new GameApp(), document.getElementById('todo'));

console.log('app started');
