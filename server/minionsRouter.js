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


  minionsRouter.get('/api/minions', (req, res, next) => {
    const minions = req.body;
    const minionsData = getAllFromDatabase(minions);
    if(minionsData) {
        console.log('Data received: ', minionsData);
        res.status(200).send(minionsData);
    }
    else{
        res.status(404).send('resource not found!');
    }

});

minionsRouter.post('/api/minions', (req, res, next) => {
    const newMinion = req.body;

    if(typeof newMinion === 'object' && newMinion !== null) {
        addToDatabase(minions, newMinion);
        console.log(`New minion added: ${newMinion}`);
        res.status(201).send(newMinion);
    } else{
        console.log('Invalid characters');
    };
});

minionsRouter.get('/api/minions/:minionId', (req, res, next) => {

});

minionsRouter.put('/api/minions/:minionId', (req, res, next) => {

});

minionsRouter.delete('/api/minions/:minionId', (req, res, next) => {

});