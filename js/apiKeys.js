const weather = require('./weather');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/apiKeys.json')
      .done((data) => {
        resolve(data.apiKeys);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then((results) => {
      weather.setKeys(results.weather.apiKeys);
      // firebase.initializeApp();
    })
    .catch((err) => {
      console.error('no keys', err);
    });
};

module.exports = {
  retrieveKeys,
};
