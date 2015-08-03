/** @jsx React.DOM */
'use strict';
var React = require('react');

module.exports = React.createClass({
	render: function(){
    console.log(this.props);
    var url = "http://king.com" + this.props.children.url;
		return (
			<li className="item">
            <a href={url}>{this.props.children.name}</a><i className="icon-star">&#9733;</i>
            </li>
		)
	}
});