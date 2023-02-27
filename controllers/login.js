const express=require('express'); // Refers to express installed to node modules
const controller=express.Router();
const user=require('../models/user_model');

// Implementing all user-tables CRUD-operations
// Create Read Update Delete
controller.get('/', function(request, response){
    user.getAllUsers(function(error, dbData){
        if(error){
            response.send(error);
        }
        else {
            response.send(dbData);
        }
    });
});

controller.get('/:id', function(request, response){
    user.getOneUser(request.params.id, function(error, dbData){
        if(error) {
            response.send(error);
        }
        else {
            response.send(dbData[0]);
        }
    });
})

controller.post('/', function(request, response){
    user.addUser(request.body, function(error, dbData){
        if(error){
            response.send(error);
        }
        else {
            response.send(dbData);
        }
    });

})

controller.put('/:id', function(request, response){
    user.updateUser(request.params.id, request.body, function(error, dbData){
        if (error) {
            response.send(error);
        }
        else { 
            response.send(dbData);
        }
    });
})

controller.delete('/:id', function(request, response){
    user.deleteUser(request.params.id, function(error, dbData){
        if(error){
            response.send(error);
        }
        else {
            response.send(dbData);
        }
    });
    
})

module.exports=controller;