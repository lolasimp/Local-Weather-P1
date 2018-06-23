const weather = require('./weather');
const firebaseApi = require('./firebaseApi');
const { checkLoginStatus, } = require('./auth');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $
      .ajax('../db/apiKeys.json')
      .done((data) => {
        resolve(data.apiKeys);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  apiKeys().then((results) => {
    weather.setKeys(results.weather.apiKeys);
    firebaseApi.setConfig(results.firebase);
    firebase.initializeApp(results.firebase);
    firebase
      .auth()
      .signInWithEmailAndPassword('lolalsimp@gmail.com', '123456')
      .catch((error) => {
        $('#signin-error-msg').text(error.message);
        $('#signin-error').removeClass('hide');
        console.error(error.message);
      });
    checkLoginStatus();
  }).catch((err) => {
    console.error('no keys:', err);
  });
};

module.exports = {
  retrieveKeys,
};
