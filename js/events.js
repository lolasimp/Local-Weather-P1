const weather = require('./weather');

const pressEnter = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      const searchZip = $('#searchBar').val().replace('', '%20');
      weather.showResults(searchZip);
    }
  });
};

const navLinks = () => {
  $(document).click((e) => {
    if (e.target.id === 'threeDay') {
      $('#threeADay').removeClass('hide');
      $('#weekForecast').addClass('hide');
      $('#search').addClass('hide');
    } else if (e.target.id === 'fiveDay') {
      $('#weekForecast').removeClass('hide');
      $('#threeADay').addClass('hide');
      $('#search').addClass('hide');
    } else if (e.target.id === 'navSearch') {
      $('#weekForecast').addClass('hide');
      $('#threeADay').addClass('hide');
      $('#search').removeClass('hide');
    }
  });
};

const initializer = () => {
  navLinks();
};

module.exports = {
  initializer,
  pressEnter,
};
