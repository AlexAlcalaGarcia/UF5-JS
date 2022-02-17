function guardardades(){
    sessionStorage.setItem('espaiusuari', document.getElementById("usuari1").value);
    sessionStorage.setItem('espainom', document.getElementById("nom").value);
    sessionStorage.setItem('espaicognom', document.getElementById("cognom").value);
    sessionStorage.setItem('contra1', document.getElementById("password1").value);
    sessionStorage.setItem('contra2', document.getElementById("password2").value);
}
function recuperardades(){
    document.getElementById("nom").value = sessionStorage.getItem("espainom");
    document.getElementById("cognom").value = sessionStorage.getItem("espaicognom");
}
function esborrardades(){
    sessionStorage.clear();
}
function comprova() { 
    if (document.getElementById("password1").value == sessionStorage.getItem("contra1") && document.getElementById("password2").value == sessionStorage.getItem("contra1")){
        alert("Coincideix amb les cookies!");
    } else {
        alert("No coincideix amb les cookies!");
    }
}