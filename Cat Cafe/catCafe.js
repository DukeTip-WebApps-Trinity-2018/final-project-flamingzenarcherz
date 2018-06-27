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
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var password = prompt("Please Enter the Password");

if (password == null || password != "#7jnsuot7C9947HDJhOS0f*78asdf2354542335132154987&&&*785878^%()9389989y7LJDJSU9&^TVU&E&YVuhc|FP-_R||*$))@__7&X&C*V(ISD&t0$))*7") {
  txt = "Password Incorrect.";
} else {
  txt = "Welcome to the secret restaurant! What would you like to order?";
}

window.alert(txt);