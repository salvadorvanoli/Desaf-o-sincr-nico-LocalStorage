document.addEventListener("DOMContentLoaded", function(){
    let inputText = document.getElementById("inputText");
    let buttonText = document.getElementById("buttonText");
    let array = [];
    
    buttonText.addEventListener("click", function(){
        array.push(inputText.value);
        localStorage.setItem("array", array);
        inputText.value = "";
    });
});