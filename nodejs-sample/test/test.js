
var request = require( 'supertest');
var express = require('express');

var app = require('../app.js');

describe('GET', function() {

  it('responds with a json success message', function(done) {
    request(app)
    .get('/')
    //.set('Accept', 'application/json')
    .expect(200, done);

  });
});

