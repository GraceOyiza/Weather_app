import './scss/style.scss';

let weather = {
  apiKey: 'c20d664fe15511ff6b176f9e20df512f',
  fetchweather: function (city) {
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q= ' +
        city +
        '&units=metric&appid=' +
        this.apiKey,
    )
      .then((response) => response.json())
      .then((data) => this.displayweather(data));
  },
};
