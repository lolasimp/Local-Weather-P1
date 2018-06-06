const weather = require('./weather');
// const dom = require('./dom');

// const zipEntered = () => {
//   const zipInput = $('#searchBar').val();
//   if (zipInput.length === 5 && $.isNumeric(zipInput)) {
//     weather.getWeather(zipInput)
//       .then((results) => {
//         dom.todayWeather(results);
//         $('#day').html('');
//        showOneDay()
//       })
//       .catch((err) => {
//         console.error('err', err);
//       });
//   } else {
//     alert('Will only accept 5 digits!!');
//   }
// };

const pressEnter = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      const searchWord = $('#searchBar').val();
      weather.showOneDay(searchWord);
    }
  });
};

const navLinks = () => {
  $(document).click((e) => {
    if (e.target.id === 'threeDay') {
      $('#threeADay').removeClass('hide');
      $('#weekForecast').addClass('hide');
      $('#search').addClass('hide');
      $('#days').addClass('hide');
    } else if (e.target.id === 'fiveDay') {
      $('#weekForecast').removeClass('hide');
      $('#threeADay').addClass('hide');
      $('#search').addClass('hide');
      $('#days').addClass('hide');
    } else if (e.target.id === 'navSearch') {
      $('#weekForecast').addClass('hide');
      $('#threeADay').addClass('hide');
      $('#search').removeClass('hide');
      $('#days').addClass('hide');
    } else if (e.target.id === 'current') {
      $('#weekForecast').addClass('hide');
      $('#threeADay').addClass('hide');
      $('#search').addClass('hide');
      $('#days').removeClass('hide');
    }
  });
};

const initializer = () => {
  navLinks();
  pressEnter();

};

module.exports = {
  initializer,
};
