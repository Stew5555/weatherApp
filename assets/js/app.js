var button = document.getElementById('btn')
var inputValue = document.getElementById('value')
var city = document.getElementById('city')
var temp = document.querySelector('main1')
var wind = document.querySelector('main2')
var humidity = document.querySelector('main3')
var uvIndex = document.querySelector('main4')





// I had bunch of trouble with my api key...

let weather = {
    apiey: "d697732be2f78579a1dba3c5a07ea044",
    fetchWeather: function(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?` + city + `&units=metric&appid=` + this.apikey  )
        .then((respone) => respone.json())
        .then((data) => console.log(data))
    },
  displayWeather: function(data) {

  }
}