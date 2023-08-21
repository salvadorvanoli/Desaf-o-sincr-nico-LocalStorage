document.addEventListener("DOMContentLoaded", function(){
    let textoGuardado = localStorage.getItem("texto");
    let data = document.getElementById("data");

    data.innerHTML += `<br>` + textoGuardado +  `<br>`;
});