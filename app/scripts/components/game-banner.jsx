/** @jsx React.DOM */
'use strict';
var React = require('react'),
    GameTabs = require('./game-tabs.jsx');
    
module.exports = React.createClass({
	render: function(){
		return (
			<div className="header">
                <h1 className="title">Game List</h1>
                <GameTabs/>
            </div>
		);
	}
});