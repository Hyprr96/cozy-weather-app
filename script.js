const apiKey = "c0f21c7d54eb428892120742250206";
const city = "Toronto";
const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const temp = data.current.temp_c;
    const condition = data.current.condition.text;
    const feelsLike = data.current.feelslike_c;
    const humidity = data.current.humidity;
    const wind = data.current.wind_kph;
    const sunset = data.forecast.forecastday[0].astro.sunset;

    document.getElementById("condition").textContent = condition;
    document.getElementById("temp").textContent = `${Math.round(temp)}°C`;
    document.getElementById("feelsLike").textContent = `Feels like: ${Math.round(feelsLike)}°C`;
    document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
    document.getElementById("wind").textContent = `Wind: ${wind} km/h`;
    document.getElementById("sunset").textContent = `Sunset: ${sunset}`;
    })
    
    .catch(err => {
        document.getElementById("condition").textContent = "Error loading weather.";
        console.error(err);
    });
