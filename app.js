var express = require('express');
var bodyParser = require('body-parser');
var todoController = require('./controllers/todoController');

var app = express();


//template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'))

todoController(app);

//port listen
app.listen(3500);
console.log("Server started... \nlistening to port 3000");
