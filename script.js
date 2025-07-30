const inputtext = document.querySelector(".input-text");
const searchBtn = document.querySelector(".seach-logo");
const wheatherIcon = document.querySelector(".weatherIcon");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".percentage")
const windspeed = document.querySelector(".km");
const error = document.querySelector(".error");

const spinner = document.querySelector(".spinner-border");



searchBtn.addEventListener("click",()=>{
    spinner.classList.add("spinner");
    const inputvalue = inputtext.value;
    if(!inputvalue){
        alert("enter city name");
        return;
    }else{
        const ApiKey = "62f03b480e42167bfac34ffc7853fab6";
        const url ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        async function checkWheather(cityname)  
        {
            
                const response = await fetch(url + cityname + `&appid=${ApiKey}`);
                if(response.status == 404){
                    error.style.display = "block";
                    spinner.classList.remove("spinner");
                    document.querySelector(".report").style.display = "none";
                }else{
                    spinner.classList.remove("spinner");
                    let data = await response.json();
                    city.innerHTML = data.name;
                    temp.innerHTML = Math.round(data.main.temp) + "°C";
                    windspeed.innerHTML = data.wind.speed + "km/h";
                    humidity.innerHTML = data.main.humidity + "%";
                    if(data.weather[0].main == 'clouds'){
                        wheatherIcon.src = "images/clouds.png";
                    }
                    else if(data.weather[0].main == 'Clear'){
                        wheatherIcon.src = "images/clear.png";
                    }
                    else if(data.weather[0].main == 'Drizzle'){
                        wheatherIcon.src = "images/drizzle.png";
                    }
                    else if(data.weather[0].main == 'Mist'){
                        wheatherIcon.src = "images/mist.png";
                    }
                    else if(data.weather[0].main == 'Rain'){
                        wheatherIcon.src = "images/rain.png";
                    }
                    else if(data.weather[0].main == 'Snow'){
                        wheatherIcon.src = "images/snow.png";
                    }
                    error.style.display = "none";
                    document.querySelector(".report").style.display = "block";
                }
                
                
          
        }
        checkWheather(inputvalue);
    }
});