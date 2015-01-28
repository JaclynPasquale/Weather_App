function getJSONP(url, cbName){
  var $script = document.createElement('script')
  $script.src = url + '?callback=' + cbName;
  document.body.appendChild($script);

}

function getCityName(city){
        var $h1 = document.getElementById("cityName");
        $h1.innerHTML = city;
}

function addItemToList($list, itemText){ 
var $li = document.createElement("li");
var $high = document.createElement("p");
var $low = document.createElement("p");
var $day = document.createElement("h3");
var $icon = document.createElement("img");
$icon.src = itemText.icon_url; 
$day.innerHTML = itemText.date.weekday;
$high.innerHTML = "high " + itemText.high.fahrenheit + "&#176;" + " F";
$low.innerHTML = "low " + itemText.low.fahrenheit + "&#176;" + " F" ;
$li.appendChild($icon);
$li.appendChild($day);
$li.appendChild($high);
$li.appendChild($low);
$list.appendChild($li);
}


function myAwesomeFunction(data){
        var forecast = data.forecast.simpleforecast.forecastday;

        var $ul = document.getElementById('weatherforecast5day');
        $ul.innerHTML = "";

        for(var i = 0; i < 5; i++) {
             addItemToList($ul, forecast[i])
         }

        var cityName = data.location.city;

        getCityName(cityName)

}




document.addEventListener("DOMContentLoaded", function(){
 var $form = document.getElementById("zipcodeForm");
 var $zipBox = $form.querySelector("input[type='text']");

 $form.addEventListener('submit', function(event){
        event.preventDefault();
  var url = "http://api.wunderground.com/api/d89f318f93a1c98e/geolookup/forecast10day/q/" + $zipBox.value + ".json";
  getJSONP(url, 'myAwesomeFunction')
});       
});




