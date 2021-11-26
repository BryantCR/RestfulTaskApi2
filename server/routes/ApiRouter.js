const express = require("express");
const { get } = require("http");
const ApiRouter = express.Router();
const {TaskController} = require('./../controllers/ApiController');


ApiRouter
    .get( '/tasks', TaskController.allTasks );
ApiRouter
    .post('/tasks', TaskController.addTask);
ApiRouter
    .get('/remove/:name', TaskController.removePerson );
ApiRouter
    .get('/tasks/:title', TaskController.findByName );
ApiRouter
    .put('/tasks/:id', TaskController.findByName );

module.exports = {ApiRouter}