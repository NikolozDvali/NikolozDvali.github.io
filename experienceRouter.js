import { experienceIsValid } from "./experienceValidator.js";

const goBackButton = document.getElementById("backButton");
goBackButton.addEventListener("click", function(e){
    location.assign("index.html");
})

const backButtonAtBottom = document.getElementById("goBack");
backButtonAtBottom.addEventListener("click", function(e){
    location.assign("private.html");
})

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", function(e){
    location.reload();
    if(experienceIsValid()){
        location.assign("education.html");
    }    
})