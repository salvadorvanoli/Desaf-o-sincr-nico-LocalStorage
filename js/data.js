document.addEventListener("DOMContentLoaded", function(){
    let textoGuardado = localStorage.getItem("texto");
    let data = document.getElementById("data");
    let array = localStorage.getItem("array");
    let stringElement = JSON.stringify(array);
    data.innerHTML += stringElement;
});