//day of week
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var currentDate = new Date();
var currentDayIndx = currentDate.getDay();
var currentDayOfWeek = weekday[currentDayIndx];
document.getElementById("day").textContent=currentDayOfWeek;

//Track Display
document.getElementById("myTrack").innerHTML = "Frontend";

//current utc time
var dTime = new Date();
var ttime = dTime.getTime();
document.getElementById("time").innerHTML = ttime;


