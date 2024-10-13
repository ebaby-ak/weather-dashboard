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
        displayForecast(data);
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

function displayForecast(data) {
    const forecastContainer = $('#forecastCards');
    forecastContainer.empty();

    data.list.forEach(forecast => {
        const date = new Date(forecast.dt_txt).toLocaleDateString();
        const temp = forecast.main.temp;

        const forecastCard = `
        <div>
            <h3>${date}</h3>
            <p>Temp: ${temp}°F</p>
        </div>
            `;
            
        forecastContainer.append(forecastCard);
    });

}