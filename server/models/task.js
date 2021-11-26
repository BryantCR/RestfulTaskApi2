var mongoose = require("mongoose");

var TaskSchema = new mongoose.Schema({
    title: {
        type: String, 
        default: ""
    },
    description: {
        type: String, 
        default: ""
    },
    completed: {
        type: Boolean, 
        default: false
    }, 
    created_at : {
        type : Date,
    },
    updated_at : {
        type : Date,
    }
});

mongoose.model("Task", TaskSchema);