// DOM Elements
const locationSelector = document.querySelector('#location-select'); // HTML Select Element
const locationName = document.querySelector('#location'); // HTML Element
const timestamp = document.querySelector('#timestamp'); // HTML Element
let temperature = document.querySelector('#temp'); // HTML Element
let weatherDescription = document.querySelector('#description'); // HTML Element
let humidity = document.querySelector('#humidity'); // HTML Element
let wind = document.querySelector('#wind'); // HTML Element

// Weather API Endpoint
const weatherApiEndpoint = 'https://api.openweathermap.org/data/2.5/weather'; // String

// API Key
const apiKey = "4d8fb5b93d4af21d66a2948710284366"; // String

// Weather Icons
const weatherIcons = { // Object
  '01d': 'fas fa-sun',
  '01n': 'fas fa-moon',
  '02d': 'fas fa-cloud-sun',
  '02n': 'fas fa-cloud-moon',
  '03d': 'fas fa-cloud',
  '03n': 'fas fa-cloud',
  '04d': 'fas fa-cloud',
  '04n': 'fas fa-cloud',
  '09d': 'fas fa-cloud-showers-heavy',
  '09n': 'fas fa-cloud-showers-heavy',
  '10d': 'fas fa-cloud-sun-rain',
  '10n': 'fas fa-cloud-moon-rain',
  '11d': 'fas fa-bolt',
  '11n': 'fas fa-bolt',
  '13d': 'fas fa-snowflake',
  '13n': 'fas fa-snowflake',
  '50d': 'fas fa-smog',
  '50n': 'fas fa-smog',
};

// Update Weather Data
function updateWeatherData(city) {
  // Update Location
  locationName.textContent = city;

  // Update Timestamp
  timestamp.textContent = new Date().toLocaleString();

  // Get Weather Data
  fetch(`${weatherApiEndpoint}?q=${city},PH&units=metric&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      // Update Temperature
      temperature.textContent = `${data.main.temp}°C`;

      // Update Weather Description and Icon
      const weatherIconClass = weatherIcons[data.weather[0].icon];
      weatherDescription.innerHTML = `<i class="${weatherIconClass}"></i>${data.weather[0].description}`;

      // Update Humidity
      humidity.textContent = `Humidity: ${data.main.humidity}%`;

      // Update Wind
      wind.textContent = `Wind: ${data.wind.speed} m/s`;
    });
}

// Event Listener for Location Selector
locationSelector.addEventListener('change', (event) => {
  const city = event.target.value;
  updateWeatherData(city);
});

// Initialize Default Location
const defaultCity = 'Manila';
updateWeatherData(defaultCity);
