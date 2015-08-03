/** @jsx React.DOM */
'use strict';
var React = require('react'),
    GameListItem = require('./game-list-item.jsx');

module.exports = React.createClass({
  render: function() {
  var createItem = function(itemText) {
    return (
        <GameListItem>{itemText}</GameListItem>
      );
  };
  return <ul className="item-list">{this.props.items.map(createItem)}</ul>;
  }
});