const express = require('express');
const app = express();
const dotenv=require('dotenv');

app.use(dotenv.config());

const bookRouter=require('./controllers/book');
const borrowerRouter=require('./controllers/borrower');
const userRouter=require('./controllers/user');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/book',bookRouter);
app.use('/borrower',borrowerRouter);
app.use('/user',userRouter);

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
    response.json(request.body);
    console.log(request.body.fname);
});

app.listen([process.env.port], function(){
    console.log("Application listens to port " + port);
});
