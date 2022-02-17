nombretata = document.getElementById('nomvalue');
localStorage.setItem("respostacorrecta", "true");
const urlnom = new URLSearchParams(window.location.search).get('aquesteselnom');
function entrar() {
    inputnom = document.getElementById("nomvalue").value;
    inputedat = document.getElementById("edatvalue").value;
    if (inputedat > 17 && inputnom != "" || localStorage.getItem("nomnom") == inputnom && inputnom != "") {
        localStorage.setItem('nomnom', inputnom);
        window.open('web/trivial-api.htm?aquesteselnom='+inputnom);
    } else if (inputedat < 18) {
        alert('No ets prou gran')
    } else {
        alert('Posa el nom')
    } 
}
var contingut = document.querySelector('#contingut')
function agafar() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
    console.log(data.results['0'])
    contingut.innerHTML = `
    <img src="${data.results['0'].picture.large}"
    width="120px" class="img-fluid rounded-circle">
    <p>Nombre:</p>` + urlnom;
})
} 
function resposta(a) {
    if (a.value == localStorage.getItem("respostacorrecta")) {
        alert ('Correcte!');
    } else {
        alert ('malament :/')
    }
}