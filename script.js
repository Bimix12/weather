async function getWeather() {
  const apiKey = "feb0bf012c60494fa98231450252606";
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const info = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡 Temperature: ${data.main.temp} °C</p>
        <p>☁ Condition: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬 Wind Speed: ${data.wind.speed} km/h</p>
      `;
      document.getElementById("weatherInfo").innerHTML = info;
    } else {
      document.getElementById("weatherInfo").innerHTML = "<p>City not found.</p>";
    }
  } catch (err) {
    document.getElementById("weatherInfo").innerHTML = "<p>Error fetching weather data.</p>";
  }
}
