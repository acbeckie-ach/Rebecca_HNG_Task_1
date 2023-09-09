// display name
function userName () {
    document.getElementById("slackUserName").innerHTML = "Rebecca Acheampong"; 
}

userName();

//display picture 
function getImage() {
    var myImage = document.createElement("img");
    myImage.src = "meeee.png";
    var src = document.getElementById("slackDisplayImage");
    src.appendChild(myImage);
}
getImage();

//display current day

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var currentDate = new Date();
var currentDayIndx = currentDate.getDay();
var currentDayOfWeek = weekday[currentDayIndx];
document.getElementById("currentDayOfTheWeek").textContent=currentDayOfWeek;

//Track Display
document.getElementById("myTrack").innerHTML = "Frontend";

//current utc time
var dTime = new Date();
var hour = dTime.getUTCHours();
var minutes = dTime.getMinutes();
var seconds = dTime.getSeconds();
utc = hour + ":" + minutes + ":" + seconds;
document.getElementById("currentUTCTime").innerHTML = utc;


