// const fiveDayForecast = (weatherArray) => {
//   let string = '';
//   weatherArray.forEach((weather) => {
//     if (index % 8 === 0) {
//       string += `<div class="row">`;
//     }
//     string += `<div>`;
//     string +=  `<div>`;
//     string +=    `<h1>Today's Weather</h1>`;
//     string +=    `<h2>${weather.name}</h2>`;
//     string +=    `<h1 class="temp">${weather.temp}</h1>`;
//     string +=    `<h4>${weather.pressure}</h4>`;
//     string +=    `<h4>${weather.speed}</h4>`;
//     string +=    `<h4>${weather.description}</h4>`;
//     string +=  `</div>`;
//     string += `</div>`;
//   })
// };

// const threeDayForcast = () => {

// };

const weatherString = (weather) => {
  let string = '';
  string += `<div class="text-center">`;
  string +=  `<h1>Today's Weather</h1>`;
  string +=    `<h2>${weather.name}</h2>`;
  string +=    `<h1 class="temp">${weather.temp}</h1>`;
  string +=    `<h4>${weather.pressure}</h4>`;
  string +=    `<h4>${weather.speed}</h4>`;
  string +=    `<h4>${weather.description}</h4>`;
  string += `</div>`;
  printToDom(string);
};

// const printToDom = (strang) => {
//   $('#')
// }

const printToDom = (string) => {
  $('#searchOne').html(string);
};

module.exports = {
  // fiveDayForecast,
  // threeDayForcast,
  weatherString,
};
