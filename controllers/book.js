const express=require('express'); // Refers to express installed to node modules
const controller=express.Router();

// Implementing all book-tables CRUD-operations
// Create Read Update Delete
controller.get('/', function(request, response){
    response.json("Returns all books");
});

controller.get('/:id', function(request, response){
    response.json("Returns a book, where id=" + request.params.id);
})

controller.post('/', function(request, response){
    response.json(request.body);
})

controller.put('/:id', function(request, response){
    response.json("Changes the book where id="+request.params.id);
    console.log(request.body);
})

controller.delete('/:id', function(request, response){
    response.json("Deletes the book where id="+request.params.id);
    console.log("Deletes the book where id="+request.params.id);
})

module.exports=controller;