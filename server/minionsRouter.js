const express = require('express');
const minionsRouter = express.Router();


module.exports = minionsRouter;


const { 
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('./db');


  minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));

});

minionsRouter.post('/', (req, res, next) => {
    let newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});

minionsRouter.get('/:minionId', (req, res, next) => {

});

minionsRouter.put('/:minionId', (req, res, next) => {

});

minionsRouter.delete('/:minionId', (req, res, next) => {

});