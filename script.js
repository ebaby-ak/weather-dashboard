$(document).ready(function() {
    const apiKey = "e1973810f9a04e7b5c1df04fa43bea43";


$('#searchBtn').on('click', function(){
    const city = $('cityInput').val();
    if (city) {
        getWeather(city);
    } else {
        alert("Enter a city.");
    }
  })  
});

function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={e1973810f9a04e7b5c1df04fa43bea43}`

    $.getJSON(apiUrl, function(data) {
        displayCurrentWeather(data);
        getForecast(data.coord.lat, data.coord.lon);
    })
}



$.get(apiUrl, function(data) {
    $('#currentCity').text(`${data.name} (${new Date().toLocaleDateString()})`);
    $("#currentTemp").text(`Temp: ${data.main.temp}°F`);
    $('#currentWind').text(`Wind: ${data.wind.speed} MPH`);
    $('#currentHumidity').text(`Humidity: ${data.main.humidity}%`);

});

function getForecast(lat, lon) {
    const apiUrl =
      `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={e1973810f9a04e7b5c1df04fa43bea43}`;
     
      $.getJSON(apiUrl, function(data) {
        displayForecast(data);
      });
    }