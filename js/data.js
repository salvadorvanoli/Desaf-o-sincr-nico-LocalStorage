document.addEventListener("DOMContentLoaded", function(){
    let data = document.getElementById("data");
    let array = localStorage.getItem("array");
    let stringElement = JSON.stringify(array);
    if(stringElement == "null"){
        data.innerHTML = "No se ha introducido ningún dato";
    } else {
        data.innerHTML += stringElement;
    }
});