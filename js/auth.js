const { getAllWeather, } = require('./events');
const {setUID,} = require('./firebaseApi');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUID(user.uid);
      $('#savedDays').addClass('hide');
      $('#weekForecast').addClass('hide');
      $('#search').removeClass('hide');
      $('#days').addClass('hide');
      $('#authScreen').addClass('hide');
      getAllWeather();
    } else {
      $('#savedDays').addClass('hide');
      $('#weekForecast').addClass('hide');
      $('#search').addClass('hide');
      $('#days, #logout, #navSearch').addClass('hide');
      $('#authScreen').removeClass('hide');
    }
  });
};

module.exports = {
  checkLoginStatus,
};
