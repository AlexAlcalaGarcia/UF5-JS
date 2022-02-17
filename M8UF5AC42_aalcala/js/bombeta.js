function encendre(x){
    x.src ="img/llumon.gif";
}
function trencar(z){
    z.src ="img/llumbreak.gif";
}
function apagar(y){
    y.src ="img/llumoff.gif";
}
document.addEventListener('keypress', tortillamerengada);
var luz1valor = 0;
var luz2valor = 0;
var luz3valor = 0;
function tortillamerengada(x) {  
    if(x.keyCode == 49) {
        if (luz1valor == 0) {
            document.getElementById("button1").src = "img/llumon.gif";
            document.getElementById("a1").innerHTML = "1";
            document.getElementById("button2").src = "img/llumoff.gif";
            document.getElementById("a2").innerHTML = "";
            document.getElementById("button3").src = "img/llumoff.gif";
            document.getElementById("a3").innerHTML = "";
            luz1valor = 1;
            luz2valor = 0;
            luz3valor = 0;
        }
        else if (luz1valor == 1) {
            document.getElementById("button1").src = "img/llumoff.gif";
            document.getElementById("a1").innerHTML = "";
            luz1valor = 0;
        }
    }
    if(x.keyCode == 50) {
        if (luz2valor == 0) {
            document.getElementById("button1").src = "img/llumoff.gif";
            document.getElementById("a1").innerHTML = "";
            document.getElementById("button2").src = "img/llumon.gif";
            document.getElementById("a2").innerHTML = "2";
            document.getElementById("button3").src = "img/llumoff.gif";
            document.getElementById("a3").innerHTML = "";
            luz1valor = 0;
            luz2valor = 1;
            luz3valor = 0;
        }
        else if (luz2valor == 1) {
            document.getElementById("button2").src = "img/llumoff.gif";
            document.getElementById("a2").innerHTML = "";
            luz2valor = 0;
        }
    }
    if(x.keyCode == 51) {
        if (luz3valor == 0) {
            document.getElementById("button1").src = "img/llumoff.gif";
            document.getElementById("a1").innerHTML = "";
            document.getElementById("button2").src = "img/llumoff.gif";
            document.getElementById("a2").innerHTML = "";
            document.getElementById("button3").src = "img/llumon.gif";
            document.getElementById("a3").innerHTML = "3";
            luz1valor = 0;
            luz2valor = 0;
            luz3valor = 1;
        }
        else if (luz3valor == 1) {
            document.getElementById("button3").src = "img/llumoff.gif";
            document.getElementById("a3").innerHTML = "";
            luz3valor = 0;
        }
    }
    if(x.keyCode == 32) {
        document.getElementById("button1").src = "img/llumbreak.gif";
        document.getElementById("button2").src = "img/llumbreak.gif";
        document.getElementById("button3").src = "img/llumbreak.gif";
        document.getElementById("a1").innerHTML = "!";
        document.getElementById("a2").innerHTML = "!";
        document.getElementById("a3").innerHTML = "!";
        alert("Que has fet! Si t'ho he dit, no saps llegir!");
        luz1valor = 0;
        luz2valor = 0;
        luz3valor = 0;
    }
}
