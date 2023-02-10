import { addNewEducationItemInResume,addNewExperienceItemInResume } from "./newItem.js";


//
//resets data from previous pages in resume;
export function resetDataFromPreviousPages(){
    resetPrivateData();
    resetExperienceData();
    resetEducationData();
}


//
//resets private data in resume;
function resetPrivateData(){
    if(localStorage.getItem("nameInput")){
        document.getElementById("nameParagraph").innerText = localStorage.getItem("nameInput").toUpperCase();
    }if(localStorage.getItem("lastNameInput")){
        document.getElementById("nameParagraph").innerText += " "+localStorage.getItem("lastNameInput").toUpperCase();
    }

    if(localStorage.getItem("emailInput")){
        document.getElementById("emailParagraph").innerText = localStorage.getItem("emailInput");
    }
    if(localStorage.getItem("telInput")){
        document.getElementById("telParagraph").innerText = localStorage.getItem("telInput");
    }
    if(localStorage.getItem("aboutMeTextField")){
        if(localStorage.getItem("aboutMeTextField")!=""){
            document.getElementById("aboutMeText").innerText = localStorage.getItem("aboutMeTextField");
        }else{
            document.getElementById("aboutMeTitle").style.display = "none";
        }
    }else{
        document.getElementById("aboutMeTitle").style.display = "none";
    }
    if(localStorage.getItem("image")){
        document.getElementById("profilePicture").src=localStorage.getItem("image");
    }
    
}

//
//resets experience data in resume;
function resetExperienceData(){
    if((localStorage.getItem("positionInput0")!=""&& localStorage.getItem("positionInput0")!=null)||(localStorage.getItem("positionInput0")!=""&& localStorage.getItem("positionInput0")!=null)||(localStorage.getItem("startDateInput0")!=""&& localStorage.getItem("endDateInput0")!=null)||(localStorage.getItem("decriptionTextField0")!=""&& localStorage.getItem("descriptionTextField0")!=null)){
        document.getElementById("experienceTitle").style.display = "block";
        document.querySelector(".hrsUnderPrivate").style.display = "block";
    }
    for(let i = 0; i<=localStorage.getItem("counter"); i++){
        addNewExperienceItemInResume(i);
    }
    fillResumeOnRefreshExperience();

}

//
//on refresh fills resume with experience
function fillResumeOnRefreshExperience(){
    for(let i = 0; i<=localStorage.getItem("counter"); i++){
        document.getElementById("jobName"+i).innerText = localStorage.getItem("positionInput"+i);
        if(localStorage.getItem("employerInput"+i)&&localStorage.getItem("employerInput"+i)!=""){
            document.getElementById("jobName"+i).innerText +=", "+localStorage.getItem("employerInput"+i);
        }
        document.getElementById("dates"+i).innerText = localStorage.getItem("startDateInput"+i);
        if(localStorage.getItem("endDateInput"+i)&&localStorage.getItem("endDateInput"+i)!=""){
            document.getElementById("dates"+i).innerText +=" - "+localStorage.getItem("endDateInput"+i);
        }
        document.getElementById("jobdesc"+i).innerText = localStorage.getItem("descriptionTextField"+i);
    }
}

//
function resetFromLocalStorage(str){
    document.getElementById(str).value = localStorage.getItem(str);
}

//
//resets education form inputs after refresh from localStorage;
export function resetInputsEducation(){
    let num = localStorage.getItem("counterEdu");
    for(let i = 0; i<=num; i++){
        resetFromLocalStorage("saswavlebeliInput"+i);
        resetFromLocalStorage("endDateInputEdu"+i);
        resetFromLocalStorage("descriptionTextFieldEducation"+i);
        setTimeout(function(){
            resetSelectorFromLocalStorage("degreeInput"+i);
        }, 400);
    }
}

//
function resetSelectorFromLocalStorage(str){
    let selectedValue = localStorage.getItem(str);
    let selectElement = document.getElementById(str);
    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === selectedValue) {
            selectElement.options[i].selected = true;
            break;
        }
    }
}

//
//resets education data on resume after refresh;
export function fillResumeOnRefreshEducation(){
    for(let i = 0; i<=localStorage.getItem("counterEdu"); i++){
        document.getElementById("eduName"+i).innerText = localStorage.getItem("saswavlebeliInput"+i);
        if(localStorage.getItem("degreeInput"+i) != "" && localStorage.getItem("degreeInput"+i) != null){
            document.getElementById("eduName"+i).innerText += ", " + localStorage.getItem("degreeInput"+i);
        }
        document.getElementById("eduDate"+i).innerText = localStorage.getItem("endDateInputEdu"+i);
        document.getElementById("eduDesc"+i).innerText = localStorage.getItem("descriptionTextFieldEducation"+i);
    }
}

//
// after refresh, resets private data inputs in form;
export function resetPrivateDatafromLocalStorage(){
    //set saved values:
    document.getElementById("nameInput").value = getSavedValue("nameInput");
    document.getElementById("lastNameInput").value = getSavedValue("lastNameInput");
    document.getElementById("aboutMeTextField").value = getSavedValue("aboutMeTextField");
    document.getElementById("emailInput").value = getSavedValue("emailInput");
    document.getElementById("telInput").value = getSavedValue("telInput");
}

//
function getSavedValue  (v){
    if (!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v);
}

//
function resetEducationData(){
    if((localStorage.getItem("saswavlebeliInput0")!=""&& localStorage.getItem("saswavlebeliInput0")!=null)||(localStorage.getItem("degreeInput0")!=""&& localStorage.getItem("degreeInput0")!=null)||(localStorage.getItem("endDateInputEdu0")!=""&& localStorage.getItem("endDateInputEdu0")!=null)||(localStorage.getItem("decriptionTextFieldEducation0")!=""&& localStorage.getItem("descriptionTextFieldEducation0")!=null)){
        document.getElementById("educationTitle").style.display = "block";
        document.querySelector(".hrsUnderExperience").style.display = "block";

    }
    for(let i = 0; i<=localStorage.getItem("counterEdu"); i++){
        addNewEducationItemInResume(i);
    }
    fillResumeOnRefreshEducation();
}