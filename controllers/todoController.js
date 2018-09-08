var bodyParser = require('body-parser');

//dummy data
var data = [{item: 'nodeJs'},{item: 'expressJs'},{item: 'course'},{item:'BlockChain'}];
var urlencoderParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){
app.get('/todo',function(req,res){
  res.render('todo',{todos: data});

});
//to post something
app.post('/todo', urlencoderParser, function(req,res){
  data.push(req.body);
  res.json(data);
});

//to delete something
app.delete('/todo/:item',function(req,res){
  data = data.filter(function(todo){
    return todo.item.replace(/ /g, '-') !== req.params.item;
  });
  res.json(data);
});
};
