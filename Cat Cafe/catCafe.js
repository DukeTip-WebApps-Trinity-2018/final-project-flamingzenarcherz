window.onload = function () {
  $(".submit").click(function () {
    var city = $(".city").val()
    var uri = "https://api.openweathermap.org/data/2.5/weather?zip=" + city + ",us&units=imperial&appid=11ea12a822a12cbc1722c219d2adb648";
    $.get(uri, onRes);
  });
}

function onRes(response) {
  $(".country").html(response.sys.country);
  $(".temp").html(response.main.temp);
  $(".city-name").html(response.name);
  $(".weather").html(response.weather[0].description);
  recomendations(response);
}
function recomendations(response) {
  if (response.main.temp > 200) {
    $(".recommend").html("U is already dead");
  }
  if (response.main.temp > 100 && response.main.temp <= 200) {
    $(".recommend").html("It's really hot; We recommend iced coffee and some profiteroles.");
    $('#recommendImage').prepend('<img id="image" src="https://weather.sumofus.org/static/weather-images/carousel/sun.png" />')
  }
  if (response.main.temp > 85 && response.main.temp <= 100) {
    $(".recommend").html("It's quite hot; We recommend boba tea and a classic turkey sandwich.");
    $('#recommendImage').prepend('<img id="image" src="https://weather.sumofus.org/static/weather-images/carousel/sun.png" />')
  }
  if (response.main.temp > 60 && response.main.temp <= 85) {
    $(".recommend").html("It's a nice temperature; We recommend a Sprite and a muffin.");
      $('#recommendImage').prepend('<img id="image" src="https://weather.sumofus.org/static/weather-images/carousel/sun.png" />')
  }
  if (response.main.temp > 30 && response.main.temp <= 60) {
    $(".recommend").html("It's pretty chilly; We recommend a hot latte and a caesar salad.");
  }
  if (response.main.temp <= 30 && response.main.temp > 55) {
    $(".recommend").html("It's cold out; We recommend a steaming espresso and a hot churro.");
  }
  if (response.main.temp <= 5) {
    $(".recommend").html("Do you really want to go outside?");
  }
  if (response.weather[0].description == "Scattered Clouds") {
    $(".recommend").html("It's raining");
  }
}