const dom = require('./dom');

let weatherKey = '';

// setKey
const setKeys = (key) => {
  weatherKey = key;
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

const getWeek = (zip) => {
  return new Promise((resolve, reject) => {
    $.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&units=imperial&APPID=${weatherKey}`)
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

const fiveDay = (weekFlow) => {
  getWeek(weekFlow)
    .then((results) => {
      const weatherArray = [];
      weatherArray.push(results);
      dom.fiveDayForecast(results.list);
    })
    .catch((error) => {
      console.error('see five days', error);
    });
};

module.exports = {
  showOneDay,
  fiveDay,
  setKeys,
  getWeather,
  getWeek,
};
