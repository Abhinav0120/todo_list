const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description:{
        type: String,
        require: true
    },
    category:{
        type: String,
        require: true
    },
    duedate:{
        type: Date,
        default: Date.now,
        require: true
    }
});

const Task = mongoose.model('Task',taskSchema); 
module.exports = Task;

