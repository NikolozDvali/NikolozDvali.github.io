import {checkValidationForNames, makeTextInputBoxInvalid, makeTextInputBoxValid, makeDateValid } from "./experienceValidator.js"



//
//checks main experience validation after refresh
export function checkValidationExperience(){
    for(let i = 0; i<=localStorage.getItem("counter"); i++){
        if(localStorage.getItem("positionInput"+i)!="" && localStorage.getItem("positionInput"+i)!=null){
            checkValidationForNames("positionInput"+i);
        }
        
        if(localStorage.getItem("employerInput"+i)!="" && localStorage.getItem("employerInput"+i)!=null){
            checkValidationForNames("employerInput"+i);
        }
        
        if(localStorage.getItem("descriptionTextField"+i)!="" && localStorage.getItem("descriptionTextField"+i)!=null){
            if(document.getElementById("descriptionTextField"+i).value.length>0){
                makeTextInputBoxValid("descriptionTextField"+i);
            }else{
                makeTextInputBoxInvalid("descriptionTextField"+i);
        }}
        
        if(localStorage.getItem("startDateInput"+i)!="" && localStorage.getItem("startDateInput"+i)!=null){
            makeDateValid("startDateInput"+i);
        }
        if(localStorage.getItem("endDateInput"+i)!="" && localStorage.getItem("endDateInput"+i)!=null){
            makeDateValid("endDateInput"+i);
        }
    }
}



//
//resets form inputs in experience after refresh;
export function resetInputsExperience(){
    for(let i = 0; i<=localStorage.getItem("counter"); i++){
        setBackFromLocalStorage(i);
    }
    document.body.style.height = (document.body.offsetHeight + 65) + "px";

}

//
function setBackFromLocalStorage(num){
    if(localStorage.getItem("positionInput"+num)){
        if(localStorage.getItem("positionInput"+num)!=""){
            document.getElementById("positionInput"+num).value = localStorage.getItem("positionInput"+num);
        }
    }if(localStorage.getItem("employerInput"+num)){
        if(localStorage.getItem("employerInput"+num)!=""){
            document.getElementById("employerInput"+num).value = localStorage.getItem("employerInput"+num);
        }
    }if(localStorage.getItem("startDateInput"+num)){
        if(localStorage.getItem("startDateInput"+num)!=""){
            document.getElementById("startDateInput"+num).value = localStorage.getItem("startDateInput"+num);
        }
    }if(localStorage.getItem("descriptionTextField"+num)){
        if(localStorage.getItem("descriptionTextField"+num)!=""){
            document.getElementById("descriptionTextField"+num).value = localStorage.getItem("descriptionTextField"+num);
        }
    }if(localStorage.getItem("endDateInput"+num)){
        if(localStorage.getItem("endDateInput"+num)!=""){
            document.getElementById("endDateInput"+num).value = localStorage.getItem("endDateInput"+num);
        }
    }
}

