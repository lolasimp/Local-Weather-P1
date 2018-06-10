const fiveDayForecast = (weatherArray) => {
  let strang = '';
  strang += `<h1 class="text-center">5 Day Forecast</h1>`;
  weatherArray.forEach((weather, index) => {
    if (index % 8 === 0) {
      strang += `<div class="col-sm-6 col-md-4">`;
      strang +=  `<div class="thumbnail weather">`;
      strang +=    `<div class=" text-center caption">`;
      strang +=    `<h1 class="weather-temp">${weather.main.temp}</h1>`;
      strang +=    `<h4 class="weather-pressure">${weather.main.pressure}</h4>`;
      strang +=    `<h4 class="weather-speed">${weather.wind.speed}</h4>`;
      strang +=    `<h4 class="weather-description">${weather.weather[0].description}</h4>`;
      strang += `<button type="button" class="btn btn-success saveBtn"><span>Save</span></button>`;
      strang +=    `</div>`;
      strang +=  `</div>`;
      strang += `</div>`;
    }
  });
  printToDom('#weekForecast', strang);
};

const weatherString = (weather) => {
  let string = '';
  string += `<div class="text-center">`;
  string += `<div class="col-md-8 col-md-4-offset">`;
  string +=  `<div class="jumbotron weather">`;
  string +=  `<h1>Today's Weather</h1>`;
  string +=    `<h2 class="weather-dayName">${weather.name}</h2>`;
  string +=    `<h1 class="weather-temp">${weather.main.temp}</h1>`;
  string +=    `<h2 class="weather-pressure">${weather.main.pressure}</h2>`;
  string +=    `<h4 class="weather-speed">${weather.wind.speed}</h4>`;
  string +=    `<h4 class="weather-description">${weather.weather[0].description}</h4>`;
  string += `<button class="btn btn-success saveBtn"><span>Save</span></button>`;
  string += `</div>`;
  printToDom('#days', string);
};

const savedDays = (weatherArray) => {
  let savedString = '';
  savedString +=  `<div class="col-md-6 col-md-4">`;
  savedString +=  `<div class="thumbnail">`;
  savedString += `<div class="text-center">`;
  weatherArray.forEach((weather) => {
    // if (weather.isScary) {
    //   savedString += `<div class="col-md-4 scary" data.firebase-id="${weather.id}">`;
    // } else if (!weather.isScary) {
    //   savedString += `<div class="col-md-4 scary" data.firebase-id="${weather.id}">`;
    // }
    savedString +=    `<h2 class="weather-dayName">${weather.city}</h2>`;
    savedString +=    `<h1 class="weather-temp">${weather.temperature}</h1>`;
    savedString +=    `<h4 class="weather-pressure">${weather.pressure}</h4>`;
    savedString +=    `<h4 class="weather-speed">${weather.speed}</h4>`;
    savedString +=    `<h4 class="weather-description">${weather.description}</h4>`;
    savedString += `<div class="btn >`;
    savedString += `<button class="btn btn-danger deleteBtn"><span>Delete</span></button>`;
    savedString += `</div>`;
  });
  savedString +=  `</div>`;
  savedString += `</div>`;
  savedString += `</div>`;
  printToDom('#savedDays', savedString);
};

const printToDom = (id, string) => {
  $(id).html(string);
};

module.exports = {
  fiveDayForecast,
  weatherString,
  savedDays,
};
