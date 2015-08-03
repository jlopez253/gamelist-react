/** @jsx React.DOM */
'use strict';
var React = require('react');
    
module.exports = React.createClass({
	render: function(){
		return (
			<div className="tabs">
            <div className="tabs-item active"><a href="Games">Games</a></div>
                <div className="tabs-item"><a href="Favorites">Favorites</a></div>
            </div>
		);
	}
});