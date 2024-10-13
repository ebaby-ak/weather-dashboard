const apiKey = "e1973810f9a04e7b5c1df04fa43bea43";

$(document).ready(function() {
$('#searchBtn').on('click', function() {
    const city = $('#cityInput').val();
    console.log("City:", city);

    if (city) {
        getWeather(city);
    } else {
        alert("Enter a city.");
    }
  });  
});

function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    console.log("API Url:", apiUrl);

    fetch(apiUrl)
    .then(function (response) {
        console.log("Response:", response);

        if (!response.ok) {
            throw new Error('Response error');
        }
        return response.json();
    })
    .then(function(data) {
        displayCurrentWeather(data);
    })
    .catch(function(error) {
        console.log("Error Fetching:", error);
        alert('Error getting weather');
    });
}



function displayCurrentWeather(data) {
console.log('Displaying Weather:', data);

    $('#currentCity').text(`${data.city.name} (${new Date().toLocaleDateString()})`);
    $("#currentTemp").text(`Temp: ${data.list[0].main.temp}°F`);
    $('#currentWind').text(`Wind: ${data.list[0].wind.speed} MPH`);
    $('#currentHumidity').text(`Humidity: ${data.list[0].main.humidity}%`);
}

function getForecast(lat, lon) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
     
      $.getJSON(apiUrl, function(data) {
        displayForecast(data);
      }).fail(function() {
        alert('Error with forecast data.')
      });   
}

function displayForecast(data) {
    const forecastContainer = $('#forecast');
    forecastContainer.empty();
}