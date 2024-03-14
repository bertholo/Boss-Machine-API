const express = require('express');
const meetingsRouter = express.Router();

module.exports = meetingsRouter;

const { 
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('./db');

  meetingsRouter.get('/api/meetings', (req, res, next) => {
    
  });
  
  meetingsRouter.post('/api/meetings', (req, res, next) => {
      const newMeeting = req.body;
  
      if(typeof newMeeting === 'object' && newMeeting !== null) {
          addToDatabase(meetings, newMeeting);
          console.log(`New minion added: ${newMeeting}`);
          res.status(201).send(newMeeting);
      } else{
          console.log('Invalid characters');
      };
  });
  
  meetingsRouter.post('/api/meetings', (req, res, next) => {
  
  });