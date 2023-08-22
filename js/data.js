document.addEventListener("DOMContentLoaded", function(){
    let data = document.getElementById("data");
    let array = localStorage.getItem("array");
    data.innerHTML += array;
});