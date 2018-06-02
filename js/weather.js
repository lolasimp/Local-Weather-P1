// const dom = require('./dom');

let weatherKey = '';

// setKey
const setKeys = (key) => {
  weatherKey = key;
};

const getWeather = (zip) => {
  return new Promise((resolve, reject) => {
    $.ajax(`api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${weatherKey}&units=imperial`)
      .done((result) => {
        resolve(result);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

module.exports = {
  setKeys,
  // weatherKey,
  getWeather,
};
