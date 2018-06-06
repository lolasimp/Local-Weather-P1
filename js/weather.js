const dom = require('./dom');

let weatherKey = '';
// let imageConfig = '';

// setKey
const setKeys = (key) => {
  weatherKey = key;
  // getWeather();
};

const getWeather = (zip) => {
  return new Promise((resolve, reject) => {
    $.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&APPID=${weatherKey}`)
      .done((result) => {
        resolve(result);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const showOneDay = (oneDay) => {
  getWeather(oneDay)
    .then((results) => {
      dom.weatherString(results);
    })
    .catch((error) => {
      console.error('search error', error);
    });
};

module.exports = {
  showOneDay,
  setKeys,
  getWeather,
};
