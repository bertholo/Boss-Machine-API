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


  ideasRouter.get('/api/ideas', (req, res, next) => {
    
  });
  
  ideasRouter.post('/api/ideas', (req, res, next) => {
      const newIdea = req.body;
  
      if(typeof newMinion === 'object' && newMinion !== null) {
          addToDatabase(minions, newMinion);
          console.log(`New minion added: ${newMinion}`);
          res.status(201).send(newMinion);
      } else{
          console.log('Invalid characters');
      };
  });
  
  ideasRouter.get('/api/ideas/:ideaId', (req, res, next) => {
  
  });
  
  ideasRouter.put('/api/ideas/:ideaId', (req, res, next) => {
  
  });
  
  ideasRouter.delete('/api/ideas/:ideaId', (req, res, next) => {
  
  });