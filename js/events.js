const weather = require('./weather');
const firebaseApi = require('./firebaseApi');
const dom = require('./dom');
const {getAllWeather,} = require('./firebaseApi');

const pressEnter = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter' && !$('#search').hasClass('hide')) {
      const searchWord = $('#searchBar').val();
      weather.showOneDay(searchWord);
      weather.fiveDay(searchWord);
    }
  });
};

const navLinks = () => {
  $(document).click((e) => {
    if (e.target.id === 'allSaves') {
      $('#savedDays').removeClass('hide');
      $('#weekForecast').addClass('hide');
      $('#search').addClass('hide');
      $('#days').addClass('hide');
      $('#authScreen').addClass('hide');
      showSaved();
    } else if (e.target.id === 'fiveDay') {
      $('#weekForecast').removeClass('hide');
      $('#savedDays').addClass('hide');
      $('#search').addClass('hide');
      $('#days').addClass('hide');
      $('#authScreen').addClass('hide');
    } else if (e.target.id === 'navSearch') {
      $('#weekForecast').addClass('hide');
      $('#savedDays').addClass('hide');
      $('#search').removeClass('hide');
      $('#days').addClass('hide');
      $('#authScreen').addClass('hide');
    } else if (e.target.id === 'current') {
      $('#weekForecast').addClass('hide');
      $('#savedDays').addClass('hide');
      $('#search').addClass('hide');
      $('#days').removeClass('hide');
      $('#authScreen').addClass('hide');
    } else if (e.target.id === 'allSaves') {
      $('#weekForecast').addClass('hide');
      $('#savedDays').removeClass('hide');
      $('#search').addClass('hide');
      $('#days').addClass('hide');
      $('#authScreen').addClass('hide');
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
        showSaved();
        // weatherToSaveCard.remove();
      })
      .catch((error) => {
        console.error('error save not working', error);
      });
  });
};

const showSaved = () => {
  getAllWeather()
    .then((newArray) => {
      dom.savedDays(newArray);
      $('#savedDays').removeClass('hide');
      $('#weekForecast').addClass('hide');
      $('#search').addClass('hide');
      $('#days').addClass('hide');
      $('#authScreen').addClass('hide');
    })
    .catch((error) => {
      console.error(error);
    });
};

const showSavedEvent = () => {
  $('#allSaves').click(() => {
    savedForecaseEvent();
  });
};

const initializer = () => {
  navLinks();
  pressEnter();
  // savedForecaseEvent();
  showSavedEvent();
};

module.exports = {
  initializer,
};
