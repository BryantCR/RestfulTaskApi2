const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
    type: String,
    trim: true,
    required: [true, 'Task title is required'],
    minlength: [5, 'Task title length must be greater than 5'],
    unique: true
    },
    description: {
    type: String,
    trim: true,
    default: ''
    },
    completed: {
    type: Boolean,
    required: true,
    default: false
    },
    created_at : {
        type : Date,
    },
    updated_at : {
        type : Date,
    }
});

const Task = mongoose.model("tasks", taskSchema);

const TaskModel = {
    createTask : function( newTask ){
        return Task.create( newTask );
    },
    getAllTasks : function(){
        return Task.find();
    },
    getTaskByName : function( title ){
        return Task.findOne({ title });
    },
    delete : function( name ){
        return Task.remove({ name });
    },
    updateTask : function( id ){
        return Task.findOne({ id });
    }
};

module.exports = {TaskModel};