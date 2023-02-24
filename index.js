const express = require('express');
const path = require('path');

const db = require('./config/mongoose');
const app = express();
const port = 8000;

// use express router
app.use('/', require('./routes'));


// set up the view engine
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.urlencoded());
app.use(express.static('assets'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`); 
    }
    console.log(`Server is up and running on the Port: ${port}`);
});