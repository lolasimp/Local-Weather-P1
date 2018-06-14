const { getAllWeather,} = require('./events');
const {setUID,} = require('./firebaseApi');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUID(user.uid);
      $('#allSaves').removeClass('hide');
      $('#fiveDay').removeClass('hide');
      $('#search').removeClass('hide');
      $('#days, #current, #logout, #navSearch').removeClass('hide');
      $('#auth-link').addClass('hide');
      $('#authenticate, #authScreen').addClass('hide');
      getAllWeather();
      // savedForecaseEvent();
    } else {
      $('#allSaves').addClass('hide');
      $('#fiveDay').addClass('hide');
      $('#search').addClass('hide');
      $('#days, #logout, #current').addClass('hide');
      $('#authlink').removeClass('hide');
      $('#authenticate, #authScreen').removeClass('hide');
    }
  });
};

module.exports = {
  checkLoginStatus,
};
