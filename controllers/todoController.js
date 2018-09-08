module.exports = function(app){
app.get('/todo',function(req,res){
  res.render('todo');
});
//to post something
app.post('/todo',function(req,res){

});
//to delete something
app.delete('/todo',function(req,res){

});
};
