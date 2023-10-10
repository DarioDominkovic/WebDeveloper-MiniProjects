const apiKey = "";

function handleKeyPress(event) {
  if (event.key === "Enter") {
    getWeather();
  }
}

function getWeather() {
  const cityInput = document.getElementById("cityInput").value;
  const locationElement = document.getElementById("location");
  const temperatureElement = document.getElementById("temperature");
  const descriptionElement = document.getElementById("description");
  const weatherIcon = document.getElementById("weatherIcon");

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const { name, main, weather } = data;
      const temperatureCelsius = (main.temp - 273.15).toFixed(2);
      const weatherDescription = weather[0].description;
      const weatherIconCode = weather[0].icon;

      locationElement.textContent = `Location: ${name}`;
      temperatureElement.textContent = `Temperature: ${temperatureCelsius}°C`;
      descriptionElement.textContent = `Description: ${weatherDescription}`;

      const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}.png`;
      weatherIcon.src = weatherIconUrl;
      weatherIcon.alt = weatherDescription;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      locationElement.textContent = "Location: N/A";
      temperatureElement.textContent = "Temperature: N/A";
      descriptionElement.textContent = "Description: N/A";
    });
}

const cityInput = document.getElementById("cityInput");
cityInput.addEventListener("keydown", handleKeyPress);
