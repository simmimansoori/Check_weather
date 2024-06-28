let cityName = document.querySelector(".weather-city");
let dateTime = document.querySelector(".weather-date");
let w_forcast = document.querySelector(".forecast");
let w_icon = document.querySelector(".forcast-icon");
let w_temperature = document.querySelector(".temprature");
let w_tempMin = document.querySelector(".temp_min");
let w_tempMax = document.querySelector(".temp_max");

let w_feelsLike = document.querySelector(".weather-feelslike");
let w_humidity = document.querySelector(".weather-humidity");
let w_wind = document.querySelector(".weather-wind");
let w_pressure = document.querySelector(".weather-pressure");

let citySearch = document.querySelector(".weather-search")




const getCountryName = (code) => {

    return new Intl.DisplayNames([code], { type: 'region' }).of(code);
}

const newDate = (dt) =>{
    let datee = new Date(dt *1000);
    let date1 =  new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'Asia/Kolkata',
    });
    return date1.format(datee);
}


// Searching the city

let city = "mumbai";

citySearch.addEventListener("submit", (e) => {
    e.preventDefault();

    let cityName  = document.querySelector(".city_name");
    city = cityName.value;
    console.log(city);
    getWeatherData();

    cityName.value = "";

});


// Fetching data

const getWeatherData = async () => {
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d62b0d88fb098fe7a3fd652d7e3deea5`;
    try{
        const res = await fetch(weatherApiUrl) ;
        const data = await res.json();

        const {main, name, weather, wind, sys, dt} = data;

        cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`;
        dateTime.innerHTML = `${newDate(dt)}`

        w_forcast.innerHTML = weather[0].main;
        // w_icon.innerHTML = weather[0].icon;
        w_icon.innerHTML = `<img src= "http://openweathermap.org/img/wn/${weather[0].icon}@4x.png" />`;

        w_temperature.innerHTML = `${main.temp}&#176`;
        w_tempMin.innerHTML =`Min: ${main.temp_min.toFixed()}&#176`;
        w_tempMax.innerHTML =`Max: ${main.temp_max.toFixed()}&#176`;

        w_feelsLike.innerHTML = `${main.feels_like.toFixed()}&#176`;
        w_humidity.innerHTML = `${main.humidity}%`;
        w_wind.innerHTML = `${wind.speed} m/s`;
        w_pressure.innerHTML = `${main.pressure} hPa`;

        console.log(data);
    }catch(error){
        console.log(error);
    }
};







document.body.addEventListener("load", getWeatherData());
















































// let cityName = document.querySelector(".weather_city");
// let dateTime = document.querySelector(".weather_date_time");
// let w_forecast = document.querySelector(".weather_forecast");
// let w_icon = document.querySelector(".weather_icon");
// let w_temperature = document.querySelector(".weather_temperature");
// let w_minTem = document.querySelector(".weather_min");
// let w_maxTem = document.querySelector(".weather_max");

// let w_feelsLike = document.querySelector(".weather_feelsLike");
// let w_humidity = document.querySelector(".weather_humidity");
// let w_wind = document.querySelector(".weather_wind");
// let w_pressure = document.querySelector(".weather_pressure");

// let citySearch = document.querySelector(".weather_search");

// // to get the actual country name
// const getCountryName = (code) => {
//   return new Intl.DisplayNames([code], { type: "region" }).of(code);
// };

// // to get the date and time
// const getDateTime = (dt) => {
//   const curDate = new Date(dt * 1000); // Convert seconds to milliseconds
//   console.log(curDate);
//   // // const date = new Date();
//   const options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//   };

//   const formatter = new Intl.DateTimeFormat("en-US", options);
//   console.log(formatter);
//   return formatter.format(curDate);
// };

// let city = "pune";

// // search functionality
// citySearch.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let cityName = document.querySelector(".city_name");
//   console.log(cityName.value);
//   city = cityName.value;

//   getWeatherData();

//   cityName.value = "";
// });

// const getWeatherData = async () => {
//   const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=addYourOwnAPIKey`;
//   try {
//     const res = await fetch(weatherUrl);
//     const data = await res.json();
//     console.log(data);

//     const { main, name, weather, wind, sys, dt } = data;

//     cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`;
//     dateTime.innerHTML = getDateTime(dt);

//     w_forecast.innerHTML = weather[0].main;
//     w_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png" />`;

//     w_temperature.innerHTML = `${main.temp}&#176`;
//     w_minTem.innerHTML = `Min: ${main.temp_min.toFixed()}&#176`;
//     w_maxTem.innerHTML = `Min: ${main.temp_max.toFixed()}&#176`;

//     w_feelsLike.innerHTML = `${main.feels_like.toFixed(2)}&#176`;
//     w_humidity.innerHTML = `${main.humidity}%`;
//     w_wind.innerHTML = `${wind.speed} m/s`;
//     w_pressure.innerHTML = `${main.pressure} hPa`;
//   } catch (error) {
//     console.log(error);
//   }
// };

// document.body.addEventListener("load", getWeatherData());
