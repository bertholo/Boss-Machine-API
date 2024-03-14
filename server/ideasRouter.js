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
    
  });
  
  ideasRouter.post('/', (req, res, next) => {
      const newIdea = req.body;
  
      if(typeof newMinion === 'object' && newMinion !== null) {
          addToDatabase(minions, newMinion);
          console.log(`New minion added: ${newMinion}`);
          res.status(201).send(newMinion);
      } else{
          console.log('Invalid characters');
      };
  });
  
  ideasRouter.get('/:ideaId', (req, res, next) => {
  
  });
  
  ideasRouter.put('/:ideaId', (req, res, next) => {
  
  });
  
  ideasRouter.delete('/:ideaId', (req, res, next) => {
  
  });