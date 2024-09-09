const apikey = "ba59db47f3794374a71123003240509";
const apiUrl = "https://api.weatherapi.com/v1/forecast.json?&days=7&aqi=no&alerts=no"

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");

async function checkWeather(cityName) {
   
     
     const response = await fetch(`${apiUrl}&q=${cityName}&key=${apikey}`);
     var data = await response.json();

     console.log(data);

     //==============current data==========================

     document.querySelector(".city").innerHTML = data.location.name;
     document.querySelector(".country").innerHTML = data.location.country;
     document.querySelector(".temp").innerHTML = data.current.temp_c + "°C";
     document.querySelector(".time").innerHTML = data.location.localtime;
     document.querySelector(".condition-text").innerHTML = data.current.condition.text;
     document.querySelector(".wind").innerHTML = data.current.wind_kph + " kp/h";
     //document.querySelector(".condition-img").innerHTML = data.current.condition.icon;
     document.querySelector(".condition-img").src = "http:" + data.current.condition.icon;

     //===================day 1 data==============

     document.querySelector(".day1-time").innerHTML = data.forecast.forecastday[1].date;
     document.querySelector(".day1-temp").innerHTML = data.forecast.forecastday[1].day.avgtemp_c + "°C";
     document.querySelector(".day1-img").src = "http:" + data.forecast.forecastday[1].day.condition.icon;

     
      //===================day 2 data==============

     document.querySelector(".day2-time").innerHTML = data.forecast.forecastday[2].date;
     document.querySelector(".day2-temp").innerHTML = data.forecast.forecastday[2].day.avgtemp_c + "°C";
     document.querySelector(".day2-img").src = "http:" + data.forecast.forecastday[2].day.condition.icon;
     
     //===================day 3 data==============

     document.querySelector(".day3-time").innerHTML = data.forecast.forecastday[3].date;
     document.querySelector(".day3-temp").innerHTML = data.forecast.forecastday[3].day.avgtemp_c + "°C";
     document.querySelector(".day3-img").src = "http:" + data.forecast.forecastday[3].day.condition.icon;
     
     //===================day 4 data==============

     document.querySelector(".day4-time").innerHTML = data.forecast.forecastday[4].date;
     document.querySelector(".day4-temp").innerHTML = data.forecast.forecastday[4].day.avgtemp_c + "°C";
     document.querySelector(".day4-img").src = "http:" + data.forecast.forecastday[4].day.condition.icon;
     
     //===================day 5 data==============

     document.querySelector(".day5-time").innerHTML = data.forecast.forecastday[5].date;
     document.querySelector(".day5-temp").innerHTML = data.forecast.forecastday[5].day.avgtemp_c + "°C";
     document.querySelector(".day5-img").src = "http:" + data.forecast.forecastday[5].day.condition.icon;
     
     //===================day 6 data==============

     document.querySelector(".day6-time").innerHTML = data.forecast.forecastday[6].date;
     document.querySelector(".day6-temp").innerHTML = data.forecast.forecastday[6].day.avgtemp_c + "°C";
     document.querySelector(".day6-img").src = "http:" + data.forecast.forecastday[6].day.condition.icon;

    
    
}

 searchBtn.addEventListener("click",()=>{
     checkWeather(searchBox.value.trim());
 })



