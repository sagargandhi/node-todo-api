const expect = require('expect');
const request = require('supertest');

var {app} = require('./../server');
var {Todo} = require('./../db/models/todo');