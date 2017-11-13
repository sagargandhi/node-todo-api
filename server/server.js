var express = require('express');
var bodyParser = require('body-parser');

var {User} = require('./db/models/user');
var {Todo} = require('./db/models/todo');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (request, response)=> {
    var todo = new Todo({
        text: request.body.text
    });

    todo.save().then(doc => {
        response.status(200).send(doc);
    }, error => {
        response.status(400).send(error);
    } )
});

var port = 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}`));