const express = require('express');
const { saveAndUpdateUser, getUserData } = require('./db/query.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post('/saveWorkout', (req, res) => {
  saveAndUpdateUser(req.body).then(results => {
    console.log(results);
    res.send(results);
  })
});

app.get('/getWorkout/', (req, res) => {
  console.log(req.query.username);
getUserData(req.query.username).then(results => {
  console.log(results)
  res.send(results);
});
});


module.exports = app;