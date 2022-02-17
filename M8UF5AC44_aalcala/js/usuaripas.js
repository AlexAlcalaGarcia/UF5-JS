function comprova() { 
    if (document.getElementById('password1').value == document.getElementById('password2').value && document.getElementById('usuari1').value == "Ibai" && document.getElementById('password1').value == "1234") {
        alert("Coincideix!");
    } else {
        alert("No coincideix!");
    }
}