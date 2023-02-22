const express=require('express'); // Refers to express installed to node modules
const controller=express.Router();
const borrower=require('../models/borrower_models');

// Implementing all borrower-tables CRUD-operations
// Create Read Update Delete
controller.get('/', function(request, response){
    borrower.getAllBorrowers(function(error, dbData){
        if(error){
            response.send(error);
        }
        else {
            response.send(dbData);
        }
    });
});

controller.get('/:id', function(request, response){
    borrower.getOneBorrower(request.params.id, function(error, dbData){
        if(error) {
            response.send(error);
        }
        else {
            response.send(dbData[0]);
        }
    });
})

controller.post('/', function(request, response){
    borrower.addBorrower(request.body, function(error, dbData){
        if(error){
            response.send(error);
        }
        else {
            response.send(dbData);
        }
    });

})

controller.put('/:id', function(request, response){
    borrower.updateBorrower(request.params.id, request.body, function(error, dbData){
        if (error) {
            response.send(error);
        }
        else { 
            response.send(dbData);
        }
    });
})

controller.delete('/:id', function(request, response){
    borrower.deleteBorrower(request.params.id, function(error, dbData){
        if(error){
            response.send(error);
        }
        else {
            response.send(dbData);
        }
    });
    
})

module.exports=controller;