var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();


//template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'))

todoController(app);

//port listen
app.listen(3000);
console.log("Server started... \n listening to port 3000");
