const fiveDayForecast = (weatherArray) => {
  let strang = '';
  strang += `<h1 class="text-center">5 Day Forecast</h1>`;
  weatherArray.forEach((weather, index) => {
    if (index % 8 === 0) {
      strang += `<div class="col-sm-6 col-md-4">`;
      strang +=  `<div class="thumbnail weather">`;
      strang +=    `<div class=" text-center caption">`;
      strang +=    `<h1 class="temp">${weather.main.temp}</h1>`;
      strang +=    `<h4>${weather.main.pressure}</h4>`;
      strang +=    `<h4>${weather.wind.speed}</h4>`;
      strang +=    `<h4>${weather.weather[0].description}</h4>`;
      strang += `<button type="button" class="btn btn-success"><span>Press Me</span></button>`;
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
  string += `<div class="col-lg-8 col-lg-4-offset">`;
  string +=  `<div class="thumbnail weather">`;
  string +=  `<h1>Today's Weather</h1>`;
  string +=    `<h2>${weather.name}</h2>`;
  string +=    `<h1 class="temp">${weather.main.temp}</h1>`;
  string +=    `<h4>${weather.main.pressure}</h4>`;
  string +=    `<h4>${weather.wind.speed}</h4>`;
  string +=    `<h4>${weather.weather[0].description}</h4>`;
  string += `</div>`;
  printToDom('#days', string);
};

const printToDom = (id, string) => {
  $(id).html(string);
};

module.exports = {
  fiveDayForecast,
  weatherString,
};
