// require library
const mongoose = require('mongoose');

// connection to db
mongoose.connect('mongodb://127.0.0.1:27017/todo_list_db');

// aquire the connection (to check if it is successfull)
const db = mongoose.connection;

// in case of error print the message
db.on('error',console.error.bind(console,'error connecting to db'));

// up and running print the message
db.once('open', function(){
    console.log('Successfully connected to database');
})