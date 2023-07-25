var timing = document.getElementById("now")


const timeControl = document.querySelector('input[type="time"]');
function datas(){
  const date = new Date();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   if (date.getMinutes() < 10){
      minutes = "0" + date.getMinutes();
   }
   if (date.getHours() < 10){
      hours = "0" + date.getHours();
   }
   var time = hours + ":" + minutes
   return time
}
const times = document.getElementById("startTime");
times.value = datas()
timing.innerHTML = 'Встречи назначаются только на текущий день';
var time = times.value;
times.addEventListener("input", () => {
   if (times.value < datas()){
      time = 0
   }
   else {
      time = times.value;
   }
   
   
}, false);
btn.addEventListener("click", function(){
    if (time != 0){
          var place = document.getElementById("selection").value;
          var count = document.getElementById("count").value;
          console.log(datas())
          tg.sendData('1'+time+" "+place+" "+count);
    }

    
});
