var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var mongoose = require('mongoose');


//dummy data
var data = [{item: 'nodeJs'},{item: 'expressJs'},{item: 'course'},{item:'BlockChain'}];
var urlencoderParser = bodyParser.urlencoded({extended:false});

mongoose.connect('mongodb://test:testdb10@ds235833.mlab.com:35833/todo');
//DB schema
var schema = new mongoose.Schema({item:String});
var Todo = mongoose.model('Todo', schema);
// var item = Todo({item:'working'}).save(function(err){
//   if (err) throw err;
//   console.log('item saved');
// });

module.exports = function(app){
app.get('/todo',function(req,res){
  Todo.find({}, function(err,data){
    if (err) throw err;
    res.render('todo',{todos: data});
  });
});
//to post something
app.post('/todo', urlencoderParser, function(req,res){
  var newTodo = Todo(req.body).save(function(err,data){
    if(err) throw err;
    res.json(data);
  });
});

//to delete something
app.delete('/todo/:item',function(req,res){
  Todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err,data){
    if(err) throw err;
    res.json(data);
  });
});
};
