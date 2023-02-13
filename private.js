import { resetDataFromPreviousPages } from "./resetData.js";

document.getElementById('uploadPhoto').addEventListener('click', openDialog);
function openDialog() {
    document.getElementById('photoInput').click();
}


//handles image upload, saves it to local storage;
let input = document.getElementById("photoInput");
input.addEventListener("change", function(e){
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      const dataUrl = reader.result;
      localStorage.setItem("myFile", dataUrl);
    };
    reader.readAsDataURL(file);
})




//sets image from localstorage:
if(localStorage.getItem('image')){
    document.getElementById("profilePicture").src = localStorage.getItem('image');
}

import { addLiveListenersPrivate, addLiveValidatorsPrivate } from "./listeners.js";
import { checkValidationAfterRefresh } from "./privateValidator.js";
import { updateOnRefreshPrivate } from "./resumeUpdate1.js";
import { resetPrivateDatafromLocalStorage } from "./resetData.js";


//resets inputs data from local storage;
resetPrivateDatafromLocalStorage();

//checks validation;
checkValidationAfterRefresh();

//adds validation checkers;
addLiveValidatorsPrivate();

//adds listeners to update resume;
addLiveListenersPrivate();

//updates resume from localStorage
updateOnRefreshPrivate();

//updates resume with previous data (experience and education);
//in case user gets back from experience, he will see already filled information;
resetDataFromPreviousPages();