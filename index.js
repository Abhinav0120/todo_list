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


app.post('/tasks/delete', (req, res) => {
    const selectedItems = req.body.selectedItems;
    Task.deleteMany({ _id: { $in: selectedItems } }, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error deleting items');
      } else {
        res.redirect('/');
      }
    });
  });




app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`); 
    }
    console.log(`Server is up and running on the Port: ${port}`);
});