const API_KEY="224958004434c7e5b990b96c634c5cd0";
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".whether-icon")

async function checkWheather(city){
    const response= await fetch(url + city + `&appid=${API_KEY}`);


    var data=await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "Km/h";

        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
   }
   else if(data.weather[0].main=="Mist"){
    weatherIcon.src="images/mist.png";
  }
  else if(data.weather[0].main=="Drizzle"){
     weatherIcon.src="images/drizzle.png";
  }

}

//}
searchBtn.addEventListener('click', () =>{
    checkWheather(searchBox.value);
})
