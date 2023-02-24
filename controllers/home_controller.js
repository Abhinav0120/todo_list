const Task = require('../models/task');
module.exports.home = function(req,res){
   Task.find({}, function(err, tasks){
      if(err){
          console.log('error in fetching contacts from db');
          return;
      }

      return res.render('home',{
          title: "TODO List",
          todo_list: tasks
      });

  });
}