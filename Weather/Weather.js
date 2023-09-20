/* document.addEventListener("DOMContentLoaded", () => {  your code here  }) 
Tis a way to tell your computer to wait until the webpage has fully loaded 
before running the code inside the curly braces. 
This ensures that your code doesn't try to interact with parts of the webpage that haven't 
been set up yet.
*/
document.addEventListener("DOMContentLoaded", () => {
  const apiKey = 'ec506e1477e589f7e605bdb66bbda0b3';
  const searchButton = document.getElementById('search-button');
  const search = document.getElementById('search');
  const locationName = document.getElementById('locationName');
  const errorMessage = document.getElementById('errorMessage');
  const weatherIcon = document.getElementById('weather_icon');
  const currentTemperature = document.getElementById('currentTemperature');
  const weatherDescription = document.getElementById('weatherDescription');
  const humidity = document.getElementById('humidity');
  const windSpeed = document.getElementById('windSpeed');
  const temperatureUnit = document.getElementById('temperatureUnit');//All the above are varriable declaration based on html element id
//we add an event listner that get executed when we click element with id =searchButton
  searchButton.addEventListener("click", () => {
    const locations = search.value.trim();/*we declare a new varriable called locations
     which is actually the user input in the search bar and eddit it by triming all exta 
     with space so we know we are working with the actual input string*/
    errorMessage.textContent = ''; // set the error message to empty at first

    if (locations !== '') {
      getWeatherData(locations);
    } else {
      errorMessage.textContent = 'Please enter a location.';
      clearWeatherData()
    }
  });

  // Function to fetch weather data
  async function getWeatherData(locations) {
    try {
      apiKey;
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locations}&units=metric&appid=${apiKey}`);
      const data = await response.json();

      // Check if the request was successful
      if (response.ok) {
        errorMessage.textContent = '';
        locationName.textContent = data.name;
        weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        currentTemperature.textContent = data.main.temp.toFixed(1);
        weatherDescription.textContent = data.weather[0].description;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} km/h`;
        temperatureUnit.textContent = '\u00B0C';
      } else {
        // Display an error message
        errorMessage.textContent = 'Location not found. Please try again.';
        clearWeatherData();
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      errorMessage.textContent = 'An error occurred. Please try again later.';
      clearWeatherData();
    }
  }
  // Function to clear weather data
  function clearWeatherData() {
    locationName.textContent = '';
    weatherIcon.src = '';
    currentTemperature.textContent = '';
    weatherDescription.textContent = '';
    humidity.textContent = '';
    windSpeed.textContent = '';
    temperatureUnit.textContent = '';
}

});
