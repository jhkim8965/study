const API_KEY = '62d3c0a6fd0fcee99d94eb02a0a5a57d';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const $weather = document.querySelector('#weather span');
            $weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}°C / ${data.name}`;
        });
}

function onGeoError() {
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);