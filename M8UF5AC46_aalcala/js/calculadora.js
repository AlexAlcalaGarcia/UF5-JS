divResultado = "resultats";

divPantalla = "";

function botonNumero(numero) {
    divPantalla = divPantalla + numero;
    document.getElementById(divResultado).innerHTML = divPantalla;
}
function borrar() {
    divPantalla = "";
    document.getElementById(divResultado).innerHTML = "_";
}
function igual() {
    divPantalla = eval(divPantalla);
    document.getElementById(divResultado).innerHTML = divPantalla;
}