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

  ideasRouter.param('ideaId', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id);
    if(idea) {
      req.idea = idea;
      next();
    } else{
      res.status(404).send();
    };
  })

  ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
  });
  
  ideasRouter.post('/', (req, res, next) => {
    let newIdea = addToDatabase('ideas', req.body);
    res.status(201).send(newIdea);
  });
  
  ideasRouter.get('/:ideaId', (req, res, next) => {
    res.status(200).send(req.body);
  });
  
  ideasRouter.put('/:ideaId', (req, res, next) => {
    const updatedIdea = updateInstanceInDatabase('ideas', req.body);
    res.status(200).send(updatedIdea);
  });
  
  ideasRouter.delete('/:ideaId', (req, res, next) => {
    let deletedIdea = deleteFromDatabasebyId('ideas', req.params.ideaId);
    if(deletedIdea) {
      res.status(204).send(deletedIdea);
    }else {
      res.status(500).send();
    }
  });