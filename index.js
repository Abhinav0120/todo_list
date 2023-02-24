const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Task = require('./models/task');


const app = express();


// use express router
app.use('/', require('./routes'));


// set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.post('/create-task', function(req, res){

    Task.create({
        description: req.body.description,
        category: req.body.category,
        duedate: req.body.duedate
    }, function(err, newTask){
        if(err){
            console.log('error in creating a task');
            return;
        }

        console.log('*****', newTask);
        return res.redirect('back');
    });

});


app.post('/deleteMany' ,async (req,res) => {
    console.log('request found');
    const toDelete = req.body.toDelete;
    console.log(toDelete);
    await Task.deleteMany({_id: {$in: toDelete}});
    console.log('Tasks deleted:', toDelete);
    res.send('deleted') // or whatever
    
  })


app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`); 
    }
    console.log(`Server is up and running on the Port: ${port}`);
});