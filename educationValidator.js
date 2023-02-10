import { makeInputBoxInvalid, makeInputBoxValid, makeTextInputBoxValid} from "./privateValidator.js";
import {makeSelectorValid, makeSelectorInvalid} from "./listeners.js"
import { makeDateValid, makeTextInputBoxInvalid,makeDateInvalid } from "./experienceValidator.js";



//
//checks validation education
export function checkValidationEducation(){
    for(let i = 0; i<=localStorage.getItem("counterEdu"); i++){
        if(formIsStarted(i)){
            if(document.getElementById("saswavlebeliInput"+i).value.length<2){
                makeInputBoxInvalid("saswavlebeliInput"+i);
            }else{
                makeInputBoxValid("saswavlebeliInput"+i);
            }
            if(document.getElementById("descriptionTextFieldEducation"+i).value.length==0){
                makeTextInputBoxInvalid("descriptionTextFieldEducation"+i);
            }else{
                makeTextInputBoxValid("descriptionTextFieldEducation"+i);
            }
            if(localStorage.getItem("degreeInput"+i)!="" && localStorage.getItem("degreeInput"+i)!="აირჩიეთ ხარისხი" && localStorage.getItem("degreeInput"+i)!=null){
                makeSelectorValid("degreeInput"+i);
            }else{
                makeSelectorInvalid("degreeInput"+i);
            }
            if(document.getElementById("endDateInputEdu"+i).value!="" && document.getElementById("degreeInput"+i).value!="mm/dd/yyyy"){
                makeDateValid("endDateInputEdu"+i);
            }else{
                makeDateInvalid("endDateInputEdu"+i);
            }
        }
    }
}

//
//checks if user started filling num'th form;
function formIsStarted(num){
    if(localStorage.getItem("saswavlebeliInput"+num) && localStorage.getItem("saswavlebeliInput"+num)!=null && localStorage.getItem("saswavlebeliInput"+num)!="" ||
    localStorage.getItem("descriptionTextFieldEducation"+num) && localStorage.getItem("descriptionTextFieldEducation"+num)!=null && localStorage.getItem("descriptionTextFieldEducation"+num)!=""||
    localStorage.getItem("degreeInput"+num) && localStorage.getItem("degreeInput"+num)!=null && localStorage.getItem("degreeInput"+num)!=""||
    localStorage.getItem("endDateInputEdu"+num) && localStorage.getItem("endDateInputEdu"+num)!=null && localStorage.getItem("endDateInputEdu"+num)!=""){
        return true;
    }
    return false;
}


//
//checks validation education
export function eduIsValid(){
    for(let i = 0; i<=localStorage.getItem("counterEdu"); i++){
        if(formIsStarted(i)){
            if(document.getElementById("saswavlebeliInput"+i).value.length<2){
                makeInputBoxInvalid("saswavlebeliInput"+i);
                return false;
            }else{
                makeInputBoxValid("saswavlebeliInput"+i);
            }
            if(document.getElementById("descriptionTextFieldEducation"+i).value.length==0){
                makeTextInputBoxInvalid("descriptionTextFieldEducation"+i);
                return false;
            }else{
                makeTextInputBoxValid("descriptionTextFieldEducation"+i);
            }
            if(localStorage.getItem("degreeInput"+i)!="" && localStorage.getItem("degreeInput"+i)!="აირჩიეთ ხარისხი" && localStorage.getItem("degreeInput"+i)!=null){
                makeSelectorValid("degreeInput"+i);
            }else{
                makeSelectorInvalid("degreeInput"+i);
                return false;
            }
            if(document.getElementById("endDateInputEdu"+i).value!="" && document.getElementById("degreeInput"+i).value!="mm/dd/yyyy"){
                makeDateValid("endDateInputEdu"+i);
            }else{
                makeDateInvalid("endDateInputEdu"+i);
                return false;
            }
        }
    }
    return true;
}



