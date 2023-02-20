const express = require('express');
const app = express();
const port='3000';

app.get('/', function(request, response){
    console.log("test1");
    response.send("Express Example");
});
app.get('/esim1', function(request, response){
    response.send("This is endpoint /esim1...");
});

app.listen(port, function(){
    console.log("Application listens to port " + port);
});
