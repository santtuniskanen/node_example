const express=require('express'); // Refers to express installed to node modules
const controller=express.Router();
const book=require('../models/book_model');

// Implementing all book-tables CRUD-operations
// Create Read Update Delete
controller.get('/', function(request, response){
    let data=book.getAllBooks();
    response.json(data);
});

controller.get('/:id', function(request, response){
    let data=book.getOneBook(request.params.id);
    response.json(data);
})

controller.post('/', function(request, response){
    let data=book.addBook(request.body);
    response.json(data);
})

controller.put('/:id', function(request, response){
    let data=book.updateBook(request.params.id, request.body);
    response.json(data);
    console.log(request.body);
})

controller.delete('/:id', function(request, response){
    let data=book.deleteBook(request.params.id);
    response.json(data);
    console.log("Deletes the book where id="+request.params.id);
})

module.exports=controller;