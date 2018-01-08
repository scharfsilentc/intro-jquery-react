  
 (function() {
    var DARKSKY_API_URL = 'https://api.darksky.net/forecast/';
    var DARKSKY_API_KEY = 'd1434005989b1d79b49fffff98a3e48d';
    var CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

    var GOOGLE_MAPS_API_KEY = 'AIzaSyB6Zi5MWKV79FMDOJusRDfNrlln8pOeLAk';
    var GOOGLE_MAPS_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

    var app = $('#app');
    var cityForm = app.find('.city-form');
    var cityInput = cityForm.find('.city-input');
    var getWeatherButton = cityForm.find('.get-weather-button');
    var cityWeather = app.find('.city-weather');
    var autocompleteMenu = $('.pac-container');

    var skycons = new Skycons({
        "color": "pink"
    });

    function initSkycons() { // not rly sure how this f() works
        skycons.set("icon1", Skycons.CLEAR_DAY)
        skycons.play()
    }

    function getCoordinatesForCity(cityName) {
        var url = `${GOOGLE_MAPS_API_URL}?address=${cityName}&key=${GOOGLE_MAPS_API_KEY}`;

        return (
            $.getJSON(url)
            .then(data => {console.log(data); return data.results[0].geometry.location; }) // Transform the response to only take what we need
        );
    }

    function getCurrentWeather(coords) {
        var url = `${CORS_PROXY}${DARKSKY_API_URL}${DARKSKY_API_KEY}/${coords.lat},${coords.lng}?units=si&exclude=minutely,hourly,daily,alerts,flags`;

        return (
            $.getJSON(url)
            .then(data => data.currently)
            // .then(data => console.log(data))
        );
    }

    function findCity(event) {
        event.preventDefault();
        cityWeather.text('one moment...');
        var city = cityInput.val();
        console.log(city)

        getCoordinatesForCity(city)
            .then(getCurrentWeather)
            .then(function (weather) {
                cityWeather.text('currently ' + Math.round(weather.temperature) + ' degrees celcius');

                console.log(skycons)
            }
        
        
        )

    }

    function initAutocomplete() {
        var autocomplete = new google.maps.places.Autocomplete(cityInput[0]);
        console.log(cityInput, cityInput[0])
    }

    cityForm.on('submit', findCity)


    initSkycons();
    initAutocomplete(); 

 })() 
   