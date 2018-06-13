let firebaseConfig = {};
let uid = '';

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const setUID = (newUID) => {
  uid = newUID;
};

const saveWeatherForecast = (bestWeather) => {
  bestWeather.uid = uid;
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.databaseURL}/weather.json`,
      data: JSON.stringify(bestWeather),
    })
      .done((uniqueKey) => {
        resolve(uniqueKey);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getAllWeather = () => {
  return new Promise((resolve, reject) => {
    const allWeatherArray = [];
    $.ajax({
      method: 'GET',
      // url: `${firebaseConfig.databaseURL}/weather.json`,
      url: `${firebaseConfig.databaseURL}/weather.json?orderBy="uid"&equalTo="${uid}"`,
    })
      .done((allWeatherObj) => {
        if (allWeatherObj !== null) {
          Object.keys(allWeatherObj).forEach((uniqueKey) => {
            if (allWeatherObj[uniqueKey].isScary) {
              allWeatherObj[uniqueKey].id = uniqueKey;
              allWeatherArray.push(allWeatherObj[uniqueKey]);
            }
            // allWeatherObj[uniqueKey].id = uniqueKey;
            // allWeatherArray.push(allWeatherObj[uniqueKey]);
          });
        }
        resolve(allWeatherArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const weatherScary = (scaryWeather, scaryId) => {
  scaryWeather.uid = uid;
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'PUT',
      url: `${firebaseConfig.databaseURL}/weather/${scaryId}.json`,
      data: JSON.stringify(scaryWeather),
    })
      .done((scaryChange) => {
        resolve(scaryChange);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const deleteSavedWeather = (weatherId) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${firebaseConfig.databaseURL}/weather/${weatherId}.json`,
    })
      .done(() => {
        resolve();
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  setConfig,
  setUID,
  saveWeatherForecast,
  getAllWeather,
  deleteSavedWeather,
  weatherScary,
};
