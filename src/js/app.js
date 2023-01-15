import axios from "axios";
function searchWeather() {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const country = document.querySelector(".countryName").value;
        weatherGet(country);
    })
}

searchWeather()

function weatherGet(country) {
    axios.get(`https://api.weatherapi.com/v1/current.json?key=59a3145824b64e97ae7182238231401&q=${country}&aqi=no`)
        .then((data) => {
            console.log(data.data);
            displayWeather(data.data);
        })
        .catch((err) => (console.log(err)))
}

function displayWeather(data = []) {
    const { name } = data.location;
    const { temp_c, humidity, wind_kph } = data.current;
    const { text } = data.current.condition

    document.querySelector(".weatherName").innerText = `Weather in ${name}`;
    document.querySelector(".weatherCelsy").innerText = `${temp_c} °C`;
    document.querySelector(".weatherSky").innerText = `${text}`;
    document.querySelector(".weatherHumid").innerText = `Humidity: ${humidity}%`;
    document.querySelector(".weatherWind").innerText = `Wind speed: ${wind_kph} km/h`;
}

