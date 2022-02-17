function comprova() { 
    if (document.getElementById('password1').value == document.getElementById('password2').value) {
        alert("Coincideix");
    } else {
        alert("no coincideix");
    }
}