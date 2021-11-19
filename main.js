var body = document.getElementById("cheBODY");
var vid = document.getElementById("vid");

function start() {
    body.className="";
    vid.play();
    
    setTimeout(function(){
        body.className="display";
    }, 23000);
}