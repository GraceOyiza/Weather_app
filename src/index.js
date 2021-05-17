import './scss/style.scss';
import searchIcon from './images/search-icon.png';

let weather = {
  apiKey: 'c20d664fe15511ff6b176f9e20df512f',
  fetchweather: (city) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q= ${city}&APPID=${this.apiKey}&units=${unit}`,
    )
      .then((response) => response.json())
      .then((data) => this.displayweather(data));
  },
  displayweather: (data) => {
    const { name } = data;
    const { description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector('.city').innerText = 'Weather in ' + name;
    document.querySelector('.icon').src =
      'https://openweathermap.org/img/wn/"+ icon +" 01n@.png';
    document.querySelector('.description').innerText = description;
    document.querySelector('.temp').innerText = temp + '°C';
    document.querySelector('.humidity').innerText =
      'Humidity: ' + humidity + '%  ';
    document.querySelector('.wind').innerText =
      'Wind speed ' + speed + ' km/h  ';
    document.querySelector('.weather').classList.remove('Loading');
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + " ')";
  },
  search: () => {
    this.fetchweather(document.querySelector('.search-bar').value);
  },
};

document.querySelector('.search button').addEventListener('click', function () {
  weather.search();
});

document
  .querySelector('.search-bar')
  .addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
      weather.search();
    }
  });

const btnImg = document.querySelector('#btn-img');
btnImg.src = searchIcon;

// const celciusTofarenheit = (F = (temp * 9.0) / 5 + 32);

// var checkBox = document.getElementById('myCheck');
// // Get the output text
// checkBox.addEventListener('click', () => {
//   var text = document.getElementById('text');

//   if (checkBox.checked == true) {
//     text.style.display = 'block';
//   } else {
//     text.style.display = 'none';
//   }
// });
