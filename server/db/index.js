const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/workoutapp');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const workoutSchema = mongoose.Schema({
  username: String,
  exerciseSets: Object,
  exerciseList: Object,
});

const workout = mongoose.model('workout', workoutSchema);

module.exports = workout;