const express = require("express");
const { get } = require("http");
const ApiRouter = express.Router();
const {PersonController} = require('./../controllers/ApiController');


ApiRouter
    .get( '/', PersonController.allPeople );
ApiRouter
    .get('/new/:name', PersonController.addPerson);
ApiRouter
    .get('/remove/:name', PersonController.removePerson );
ApiRouter
    .get('/:name', PersonController.findByName );


module.exports = {ApiRouter}