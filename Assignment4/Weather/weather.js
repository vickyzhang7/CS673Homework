function fetchWeather() {
    const input = document.getElementById('cityInput').value;
    const isZipCode = /^\d{5}$/.test(input);
    const apiKey = '86cd495e3207271a9cdcee9ac725c213';
    let url;

    if (isZipCode) {
        url = `http://api.openweathermap.org/data/2.5/weather?zip=${input}&appid=${apiKey}&units=metric`;
    } else {
        url = `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = `
                    <p><strong>City:</strong> ${data.name}</p>
                    <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                    <p><strong>Feels like:</strong> ${data.main.feels_like}°C</p>
                    <p><strong>Description:</strong> ${data.weather[0].description}</p>
                `;
                document.getElementById('weather-info').innerHTML = weatherInfo;
            } else {
                document.getElementById('weather-info').innerHTML = '<p>City not found</p>';
            }
        })
        .catch(error => console.error('Error fetching weather:', error));
}