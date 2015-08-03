/** @jsx React.DOM */
'use strict';
var React = require('react'),
    GameBanner = require('./game-banner.jsx'),
    GameList = require('./game-list.jsx'),
    GameForm = require('./game-form.jsx'),
    $ = require('jquery');

module.exports = React.createClass({
    getInitialState: function() {
        return {items: []};  
    },
    updateItems: function(newItem) {
        var allItems = this.state.items.concat([newItem]);
        this.setState({
            items: allItems
        });
    },
    componentWillMount: function() {
        $.getJSON("games.json", function(data) {
        console.log(data);
            this.setState({items: data.games});
        }.bind(this));
    },
    render: function() {
        return (
            <div>
            <GameBanner/>
            <GameList items={this.state.items}/>
            
            </div>
        );
        //<GameForm onFormSubmit={this.updateItems}/>
    }
});