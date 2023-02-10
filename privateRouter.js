import { privateIsValid } from "./privateValidator.js";

const goBackButton1 = document.getElementById("backButton");
goBackButton1.addEventListener("click", function(e){
    location.assign("index.html");
})

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", function(e){
    e.preventDefault();
    if(privateIsValid()){
        location.assign("experience.html");
    }else{

    }
})


