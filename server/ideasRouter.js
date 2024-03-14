const express = require('express');
const ideasRouter = express.Router();

module.exports = ideasRouter;

const { 
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('./db');



  ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
  });
  
  ideasRouter.post('/', (req, res, next) => {
    let newIdea = addToDatabase('ideas', req.body);
    res.status(201).send(newIdea);
  });
  
  ideasRouter.get('/:ideaId', (req, res, next) => {
    
  });
  
  ideasRouter.put('/:ideaId', (req, res, next) => {
  
  });
  
  ideasRouter.delete('/:ideaId', (req, res, next) => {
  
  });