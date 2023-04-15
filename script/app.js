let tg = window.Telegram.WebApp;
tg.setBackgroundColor("#ffffff")

const date = new Date();
const timeControl = document.querySelector('input[type="time"]');
let hours = date.getHours();
let minutes = date.getMinutes();;
if (date.getMinutes() < 10){
   minutes = "0" + date.getMinutes();
}
if (date.getHours() < 10){
   hours = "0" + date.getHours();
}
var time = hours + ":" + minutes
timeControl.value = hours + ":" + minutes;
let btn = document.getElementById("btn");
const times = document.getElementById("startTime");
times.addEventListener("input", () => {
    time = times.value;
}, false);


btn.addEventListener("click", function(){
    var place = document.getElementById("selection").value;
    tg.sendData(time+" "+place+" "+tg.colorScheme);
});
