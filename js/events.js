const weather = require('./weather');
// const firebaseApi = require('./firebaseApi');
const dom = require('./dom');
const { getAllWeather, saveWeatherForecast, deleteSavedWeather, weatherScary,} = require('./firebaseApi');

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
    saveWeatherForecast(weatherToSave);
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

const deleteWeatherEvent = () => {
  $(document).on('click', '.deleteBtn', (e) => {
    const weatherToRemove = $(e.target).closest('.weather').data('firebaseId');
    deleteSavedWeather(weatherToRemove)
      .then(() => {
        showSaved();
      })
      .catch((error) => {
        console.error('error delete not working', error);
      });
  });
};

const scaryEvent = () => {
  $(document).on('click', '.scaryBtn', (e) => {
    const findScaryId = $(e.target).closest('.weather').data('firebaseId');
    const scaryCard = $(e.target).closest('.weather');
    const weatherToScary = {
      city: scaryCard.find('.weather-dayName').text(),
      temperature: scaryCard.find('.weather-temp').text(),
      pressure: scaryCard.find('.weather-pressure').text(),
      speed: scaryCard.find('.weather-speed').text(),
      description: scaryCard.find('.weather-description').text(),
      isScary: true,
    };
    weatherScary(weatherToScary, findScaryId)
      .then(() => {
        showSaved();
      })
      .catch((error) => {
        console.error('error not showing scary', error);
      });
  });
};

const initializer = () => {
  navLinks();
  pressEnter();
  showSavedEvent();
  deleteWeatherEvent();
  scaryEvent();
};

module.exports = {
  initializer,
};
