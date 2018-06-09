const weather = require('./weather');
const firebaseApi = require('./firebaseApi');
// const dom = require('./dom');

const pressEnter = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      const searchWord = $('#searchBar').val();
      weather.showOneDay(searchWord);
      weather.fiveDay(searchWord);
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

const savedForecaseEvent = () => {
  $(document).on('click', '.saveBtn', (e) => {
    const weatherToSaveCard = $(e.target).closest('.weather');
    const weatherToSave = {
      city: weatherToSaveCard.find('.weather-dayName').text(),
      temperature: weatherToSaveCard.find('.weather-temp').text(),
      pressure: weatherToSaveCard.find('.weather-pressure').text(),
      speed: weatherToSaveCard.find('.weather-speed').text(),
      description: weatherToSaveCard.find('.weather-description').text(),
      isScary: false,
    };
    firebaseApi.saveWeatherForecast(weatherToSave)
      .then(() => {
        weatherToSaveCard.remove();
      })
      .catch((error) => {
        console.error('error save not working', error);
      });
  });
};

const initializer = () => {
  navLinks();
  pressEnter();
  savedForecaseEvent();

};

module.exports = {
  initializer,
};
