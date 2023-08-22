document.addEventListener("DOMContentLoaded", function(){
    let inputText = document.getElementById("inputText");
    let buttonText = document.getElementById("buttonText");
    
    buttonText.addEventListener("click", function(){
        localStorage.setItem("texto", inputText.value);
    });
});