document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "YOUR_API_KEY";
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    const weatherIcon = document.querySelector(".weather-icon")
  
    async function checkWeather(city) {
      const response = await fetch(apiURL + city + `&appid=${apiKey}`);

       if(response.status == 404){
          document.querySelector(".error").style.display = "block"
          document.querySelector(".weather").style.display ="none"
       }
       else {

        const data = await response.json();
  
        // console.log(data);
     
         document.querySelector(".city").innerHTML = data.name;
         document.querySelector(".temp").innerHTML = data.main.temp + "°c";
         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
         document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
   
          if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "./images/clouds.png"
          }
   
         else if(data.weather[0].main == "Clear"){
           weatherIcon.src = "./images/clear.png"
         }
         
         else if(data.weather[0].main == "Rain"){
           weatherIcon.src = "./images/rain.png"
         }
         else if(data.weather[0].main == "Drizzle"){
           weatherIcon.src = "./images/drizzle.png"
         }
         else if(data.weather[0].main == "Mist"){
           weatherIcon.src = "./images/mist.png"
         }
   
         document.querySelector(".weather").style.display ="block"
         document.querySelector(".error").style.display = "none"

       }

      
    
    }
  
    searchBtn.addEventListener("click", () => {
      checkWeather(searchBox.value);
    });
  });
  


  /*
  Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
   
   We encountering, "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')", indicates that the addEventListener method is being called on a null value. The error is occurring because the JavaScript code is executing before the HTML elements have finished loading.

To fix this issue, we need to wrap the JavaScript code inside an event listener that triggers when the DOM (Document Object Model) has finished loading. As we can use the DOMContentLoaded event for this purpose.

By wrapping the code in the DOMContentLoaded event listener, it ensures that the JavaScript code will execute only after the HTML has finished loading. This way, the searchBtn element will be available, and the addEventListener method can be used without any null-related errors.

*/
