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

  minionsRouter.param('minionId', (req, res, next, id) => {
    const minion = getFromDatabaseById('minions', id);
    if(minion) {
      req.minion = minion;
      next();
    } else{
      res.status(404).send('minions not found');
    }
  })

  minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));

});

minionsRouter.post('/', (req, res, next) => {
    let newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});

minionsRouter.get('/:minionId', (req, res, next) => {
  res.send(getMinion);
});

minionsRouter.put('/:minionId', (req, res, next) => {
  let updatedMinion = updateInstanceInDatabase('minions', req.body);
  res.send(updatedMinion);
});

minionsRouter.delete('/:minionId', (req, res, next) => {
  let deletedMinion = deleteFromDatabasebyId('minions', req.params.minionId);
  if(deletedMinion){
    res.status(204).send(`minion ${deletedMinion} deleted.`)
  }else {
    res.status(500).send();
  }
});