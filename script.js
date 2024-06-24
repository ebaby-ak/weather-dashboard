document.getElementById('searchBtn').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = "e1973810f9a04e7b5c1df04fa43bea43";
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={e1973810f9a04e7b5c1df04fa43bea43}";

}

$.get(apiUrl, function(data) {
    $('#currentCity').text(`${data.name} (${new Date().toLocaleDateString()})`);
    $("#currentTemp").text(`Temp: ${data.main.temp}°F`);
    $('#currentWind').text(`Wind: ${data.wind.speed} MPH`);
    $('#currentHumidity').text(`Humidity: ${data.main.humidity}%`);
})