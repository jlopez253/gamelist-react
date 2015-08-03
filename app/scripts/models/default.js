'use strict';
var jq = require('jquery'),
    Backbone = require('backbone');

// use jQuery as DOM/Ajax library
Backbone.$ = jq;

// default model
module.exports = Backbone.Model.extend({
    initialize: function () {
        console.log('model initialized');
    }
});
