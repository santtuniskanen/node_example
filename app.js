const express = require('express');
const app = express();
const port='3000';

app.use(function(request, response, next){
    console.log("I'm a Middleware 1")
    next();
});

app.get('/', function(request, response){
    console.log("test1");
    response.send("Express Example");
});

app.use(function(request, response, next){
    console.log("I'm a Middleware 2")
    next();
});

app.get('/example1', function(request, response){
    response.send("This is endpoint /esim1...");
});

app.get('/example2/:fname?', function(request, response){
    response.send("Hello, "+request.params.fname)
});

app.post('/', function(request, response){
    response.send(response.body);
    console.log(response.body);
});

app.listen(port, function(){
    console.log("Application listens to port " + port);
});
