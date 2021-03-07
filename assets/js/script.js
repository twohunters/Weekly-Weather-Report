var searchInput = $(".searchInput");
var searchBtn = $(".searchBtn");
var searchHistory = $(".searchHistory");

var cityName = $(".cityName");
var weatherIcon = $(".weatherIcon");
var temperature = $(".temperature");
var humidity = $(".humidity");
var windSpeed = $(".windSpeed");
var uvIndex = $(".uvIndex");

var apiKey = "3db660beb8d0102e94f9bff4de224fa4";
var cityHistory = JSON.parse(localStorage.getItem("history"));
var date = moment().format("L");

function showSearchHistory() {
    let previousCity = $("<li>").text(searchInput.value());
    searchHistory.append(previousCity)
}

searchBtn.on("click", function(event) {
    event.preventDefault();
    
    $.ajax( {
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value() + "&units=imperial&appid=" + apiKey,
        method: "GET"
    }).then(function(result) {
        if (!cityHistory.includes(result.name)) {
            cityHistory.push(result.name);
        }
        localStorage.setItem("cityHistory", JSON.stringify(cityHistory));
        $(".searchInput").value("");
        showSearchHistory();

        cityName.text(result.name + date);
        temperature.text("Temperature: " + result.main.temp.toFixed(2));
        humidity.text("Humidity: " + result.main.humidity + "%");
        windSpeed.text("Wind Speed: " + result.wind.speed + " mph");
    })
})

// call uv index for weather element here

var dateForecast = $(".dateForecast");
var weatherIconForecast = $(".weatherIconForecast");
var temperatureForecast = $(".temperatureForecast");
var humidityForecast = $(".humidityForecast");

function callForecast( {
// call five day forecast for forecast element here
})