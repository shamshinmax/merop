let tg = window.Telegram.WebApp;
tg.setBackgroundColor("#ffffff")

let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn");
btn2.addEventListener("click", function(){
    document.activeElement.blur();
});
    let mest = document.getElementById("mest").value;
    let krat = document.getElementById("krat").value;
    let post = document.getElementById("post").value;
    if (mest != '' && krat != '' && post != '') {

        tg.sendData("2"+mest+" "+krat+" "+post);
    }
});
