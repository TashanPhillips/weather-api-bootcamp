//Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit

document.querySelector("button").addEventListener("click", getWeather);
function getWeather(){
    const city = document.querySelector('#city').value
    const country = document.querySelector('#country').value


fetch(
`http://api.weatherapi.com/v1/current.json?key=0766d307fc0d411ea04172552221610&q=${city},${country}`
)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

      document.querySelector("#temp").innerText = data.current.temp_f;
      // document.querySelector("img").src = data.hdurl;
      //document.querySelector("#location").innerText = data.location.country;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
  }