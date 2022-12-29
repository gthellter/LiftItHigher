const workout = require('./index.js');


module.exports.saveAndUpdateUser = (data) => {
  const query = {username: data.username};
  const options = {
    upsert: true,
    returnDocument: 'after',
  }
  console.log(data);
  return workout.findOneAndUpdate(query, data, options).catch(err => {
    return err;
  });
}

module.exports.getUserData = (username) => {
  const query = { username };
  return workout.find(query).exec().then(res => res).catch(err => err);
}