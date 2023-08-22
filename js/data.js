document.addEventListener("DOMContentLoaded", function(){
    let textoGuardado = localStorage.getItem("texto");
    let data = document.getElementById("data");
    let array = localStorage.getItem("array");
    let i = 0;

    for (const element of array) {
        let stringElement = JSON.stringify(element);
        data.innerHTML += `<br>` + stringElement +  `<br>`;
    }
});