document.addEventListener("DOMContentLoaded", function(){
/*$form = document.querySelector('form');
$form. addEventListener('submit', function(event){
        event.preventDefault();
        var zipcode = $form.elements["zipcode"].value;
*/
getJSONP(url, 'myAwesomeFunction');

});



var url = "http://api.wunderground.com/api/d89f318f93a1c98e/forecast10day/q/37217.json";


function getJSONP(url, cbName){
  var $script = document.createElement('script')
  $script.src = url + '?callback=' + cbName;
  document.body.appendChild($script);

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

function combineString(data){
var frag = document.createDocumentFragment(),
             li = document.createElement('li');
             li.innerHTML = '<p>' + " &deg; Fahrenheit";
             frag.appendChild(li);
}



function myAwesomeFunction(data){
        var forecast = data.forecast.simpleforecast.forecastday;

        var $ul = document.getElementById('weatherforecast5day');

         for(var i = 0; i < 5; i++) {
             addItemToList($ul, forecast[i])
         }


}





