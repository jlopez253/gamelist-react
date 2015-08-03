/*global describe, it, expect */
'use strict';
var Model = require('../../app/scripts/models/default'),
    Backbone = require('backbone');

describe('Default Model', function () {
    it('instanceof Backbone Model', function () {
        expect(new Model() instanceof Backbone.Model).to.equal(true);
    });
});
