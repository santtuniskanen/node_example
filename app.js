const express = require('express');
const app = express();
const port='3000';

app.get('/', function(request, response){
    console.log("test1");
    response.send("Express Example");
});
app.get('/example1', function(request, response){
    response.send("This is endpoint /esim1...");
});

app.get('/example2/:fname?', function(request, response){
    response.send("Hello, "+request.params.fname)
});

app.post('/', function(request, response){
    response.send("Post method was called");
    console.log("Post method was called");
});

app.listen(port, function(){
    console.log("Application listens to port " + port);
});
