import { makeInputBoxInvalid, makeInputBoxValid, makeTextInputBoxNormal, makeTextInputBoxValid, isValid, emailIsValid, telIsValid } from "./privateValidator.js";
import { makeDateValid, makeTextInputBoxInvalid2, makeTextInputBoxValid2, makeTextInputBoxInvalid, makeDateInvalid } from "./experienceValidator.js";

//============================================== E X P E R I E N C E =============================================================================//

//
function addLiveJobNameListeners(num){
    document.getElementById("positionInput"+num).addEventListener("input", ()=>{
        if(localStorage.getItem("employerInput"+num)!=null){
            let end = localStorage.getItem("employerInput"+num);
            console.log(end);
            if(document.getElementById("positionInput"+num).value!=null){
                document.getElementById("jobName"+num).innerText = document.getElementById("positionInput"+num).value + ", "+ end;
            }else{
                document.getElementById("jobName"+num).innerText = end;
            }
        }else{
            document.getElementById("jobName"+num).innerText = document.getElementById("positionInput"+num).value;
        }
    })

    
    document.getElementById("employerInput"+num).addEventListener("input", ()=>{
        if(localStorage.getItem("positionInput"+num)!=null){
            let start = localStorage.getItem("positionInput"+num);
            document.getElementById("jobName"+num).innerText = start + ", "+  document.getElementById("employerInput"+num).value;
        }else{
            document.getElementById("jobName"+num).innerText = document.getElementById("employerInput"+num).value;
        }
    })
}

//
function addLiveDateListeners(num){
    document.getElementById("startDateInput"+num).addEventListener("input", ()=>{
        if(localStorage.getItem("endDateInput"+num)!=null){
            let end = localStorage.getItem("endDateInput"+num);
            console.log(end);
            if(document.getElementById("startDateInput"+num).value!=null){
                document.getElementById("dates"+num).innerText = document.getElementById("startDateInput"+num).value + " - "+ end;
            }else{
                document.getElementById("dates"+num).innerText = end;
            }
        }else{
            document.getElementById("dates"+num).innerText = document.getElementById("startDateInput"+num).value;
        }
    })

    document.getElementById("endDateInput"+num).addEventListener("input", ()=>{
        if(localStorage.getItem("startDateInput"+num)!=null){
            let start = localStorage.getItem("startDateInput"+num);
            document.getElementById("dates"+num).innerText = start + " - "+  document.getElementById("endDateInput"+num).value;
        }else{
            document.getElementById("dates"+num).innerText = document.getElementById("endDateInput"+num).value;
        }
    })
}

//
function addLiveDescListeners(num){
    document.getElementById("descriptionTextField"+num).addEventListener("input", ()=>{
        document.getElementById("jobdesc"+num).innerText = document.getElementById("descriptionTextField"+num).value;
    })
}

//
//adds listeners that check for validation (experience);
export function addLiveValidatorsExperience(){
    for(let i = 0; i<=localStorage.getItem("counter"); i++){
        addLiveValidatorsPositionToPositionsInExperience(i);
        addLiveValidatorsToEmployersInExperience(i);
        addLiveValidatorsToDescriptionsInExperience(i);
        addLiveValidatorsToDatesInExperience(i);
    }
}

//
function addLiveValidatorsPositionToPositionsInExperience(num){
    document.getElementById("positionInput"+num).addEventListener("input", ()=>{
        if((document.getElementById("positionInput"+num).value.length>2)){
            makeInputBoxValid("positionInput"+num);
        }else{
            makeInputBoxInvalid("positionInput"+num);
        }
    })
}

//
function addLiveValidatorsToEmployersInExperience(num){
    document.getElementById("employerInput"+num).addEventListener("input", ()=>{
        if((document.getElementById("employerInput"+num).value.length>2)){
            makeInputBoxValid("employerInput"+num);
        }else{
            makeInputBoxInvalid("employerInput"+num);
        }
    })
}

//
function addLiveValidatorsToDescriptionsInExperience(num){
    const desc = document.getElementById("descriptionTextField"+num);
    desc.addEventListener("input", function(e){
    if(desc.value.length!=""){
        makeTextInputBoxValid2("descriptionTextField"+num, num);
    }else{
        makeTextInputBoxInvalid2("descriptionTextField"+num, num);
    }
})
}

//
function addLiveValidatorsToDatesInExperience(num){
    document.getElementById("startDateInput"+num).addEventListener("input", ()=>{
        if(document.getElementById("startDateInput"+num).value!=null && document.getElementById("startDateInput"+num).value!=""){
            makeDateValid("startDateInput"+num);
        }else{
            makeDateInvalid("startDateInput"+num);
        }
    })
    document.getElementById("endDateInput"+num).addEventListener("input", ()=>{
        if(document.getElementById("endDateInput"+num).value!=null && document.getElementById("endDateInput"+num).value!=""){
            makeDateValid("endDateInput"+num);
        }else{
            makeDateInvalid("endDateInput"+num);
        }
    })
}

//
//adds local storage savers and resume updaters to new forms (experience)
export function addNewExperienceListeners(num){
    newLocalStorageSaverExperience(num);
    newResumeUpdatersExperience(num);
}

//
function newLocalStorageSaverExperience(num){
    newSaveToLocalStorage("positionInput"+num);
    newSaveToLocalStorage("employerInput"+num);
    newSaveToLocalStorage("startDateInput"+num);
    newSaveToLocalStorage("endDateInput"+num);
    newSaveToLocalStorage("descriptionTextField"+num);
}

//
function newResumeUpdatersExperience(num){
    addLiveJobNameListeners(num);
    addLiveDateListeners(num);
    addLiveDescListeners(num);
}

//============================================== E D U C A T I O N ======================================================================================//

//
function addEducationPlaceValidator(str){
    document.getElementById(str).addEventListener("input", ()=>{
        if(document.getElementById(str).value.length<2){
            makeInputBoxInvalid(str);
        }else{
            makeInputBoxValid(str);
        }
    })
}

//
function addAgweraValidator(str){
    document.getElementById(str).addEventListener("input", ()=>{
        if(document.getElementById(str).value.length==0){
            makeTextInputBoxInvalid(str);
        }else{
            makeTextInputBoxValid(str);
        }
    })
}

//
function addDegreeValidator(str){
    document.getElementById(str).addEventListener("input", ()=>{
        if(document.getElementById(str).value!="" && document.getElementById(str).value!=null){
            makeSelectorValid(str);
        }else{
            makeSelectorInvalid(str);
        }
    })
}

//
export function makeSelectorValid(str){
    document.getElementById(str).style.borderColor = "#98E37E"
}

//
export function makeSelectorInvalid(str){
    document.getElementById(str).style.borderColor = "#EF5050"
}

//
function addDateValidator(str){
    document.getElementById(str).addEventListener("input", ()=>{
        if(document.getElementById(str).value!=""){
            makeDateValid(str);
        }
    })
}

//
//adds live validator to form inputs (education)
export function addLiveValidatorsEducation(i){
    addEducationPlaceValidator("saswavlebeliInput"+i);
    addAgweraValidator("descriptionTextFieldEducation"+i);
    addDegreeValidator("degreeInput"+i);
    addDateValidator("endDateInputEdu"+i); 
}

//
//adds live validator to form inputs (education);
export function addLiveValidatorsToEducation(){
    for(let i = 0; i<=localStorage.getItem("counterEdu"); i++){
        addEducationPlaceValidator("saswavlebeliInput"+i);
        addAgweraValidator("descriptionTextFieldEducation"+i);
        addDegreeValidator("degreeInput"+i);
        addDateValidator("endDateInputEdu"+i); 
    }
}

//
//adds listeners to education form to update resume live and save to local storage (education);
export function addNewEducationListeners(num){
    newLocalStorageSaver(num);
    newResumeUpdater(num);
}

//
function newLocalStorageSaver(num){
    newSaveToLocalStorage("saswavlebeliInput"+num);
    newSaveToLocalStorage("degreeInput"+num);
    newSaveToLocalStorage("endDateInputEdu"+num);
    newSaveToLocalStorage("descriptionTextFieldEducation"+num);
}

//
function newSaveToLocalStorage(str){
    document.getElementById(str).addEventListener("input", ()=>{
        localStorage.setItem(str, document.getElementById(str).value);
    })
}

//
//adds live updater in resume for education;
function newResumeUpdater(num){
    newAddLiveListenerToSaswavlebeli(num);
    newAddLiveListenerToDegree(num);
    newAddLiveListenerToDate(num);
    newAddLiveListenerToDescription(num);
}

//
function newAddLiveListenerToSaswavlebeli(num){
    document.getElementById("saswavlebeliInput"+num).addEventListener("input", ()=>{
        document.getElementById("eduName"+num).innerText =  document.getElementById("saswavlebeliInput"+num).value;
        if(document.getElementById("degreeInput"+num).value != "" || document.getElementById("degreeInput"+num).value != "აირჩიეთ ხარისხი"){
            document.getElementById("eduName"+num).innerText += ", " + document.getElementById("degreeInput"+num).value;
        }
        if(document.getElementById("saswavlebeliInput"+num).value == ""){
            document.getElementById("eduName"+num).innerText =  document.getElementById("degreeInput"+num).value;
        }
    })
}

//
function newAddLiveListenerToDegree(num){
    document.getElementById("degreeInput"+num).addEventListener("input", ()=>{
        if(document.getElementById("saswavlebeliInput"+num).value != ""){
            document.getElementById("eduName"+num).innerText = document.getElementById("saswavlebeliInput"+num).value + ", " + document.getElementById("degreeInput"+num).value;
        }else{
            document.getElementById("eduName"+num).innerText =  document.getElementById("degreeInput"+num).value
        }
        if(document.getElementById("degreeInput"+num).value == ""){
            document.getElementById("eduName"+num).innerText =  document.getElementById("saswavlebeliInput"+num).value;
        }
    })
}

//
function newAddLiveListenerToDate(num){
    document.getElementById("endDateInputEdu"+num).addEventListener("input", ()=>{
        document.getElementById("eduDate"+num).innerText = document.getElementById("endDateInputEdu"+num).value;
    })
}

//
function newAddLiveListenerToDescription(num){
    document.getElementById("descriptionTextFieldEducation"+num).addEventListener("input", ()=>{
        document.getElementById("eduDesc"+num).innerText = document.getElementById("descriptionTextFieldEducation"+num).value;
    })
}

//=================================================== P R I V A T E ===============================================================================//

//
//adds live validators in private;
export function addLiveValidatorsPrivate(){
    addLiveValidatorToNameInPrivate();
    addLiveValidatorToLastNameInPrivate();
    addLiveValidatorToAboutMeInPrivate();
    addLiveValidatorToEmailInPrivate();
    addLiveValidatorToTelInPrivate();
}

//
function addLiveValidatorToNameInPrivate(){
    //checks if name input is valid;
    const nameInput = document.getElementById("nameInput");
    nameInput.addEventListener("input", function(e){
        if(isValid(nameInput.value)){
            makeInputBoxValid("nameInput");
        }else{
            makeInputBoxInvalid("nameInput");
        }
    })
}

//
function addLiveValidatorToLastNameInPrivate(){
    //checks if lastName input is valid;
    const lastNameInput = document.getElementById("lastNameInput");
    lastNameInput.addEventListener("input", function(e){
        if(isValid(lastNameInput.value)){
            makeInputBoxValid("lastNameInput");
        }else{
            makeInputBoxInvalid("lastNameInput");
        }
    })
}

//
function addLiveValidatorToAboutMeInPrivate(){
    //handles "about me" input visual change;
    const aboutMe = document.getElementById("aboutMeTextField");
    aboutMe.addEventListener("input", function(e){
        if(aboutMe.value.length>0){
            makeTextInputBoxValid("aboutMeTextField");
        }else{
            makeTextInputBoxNormal("aboutMeTextField");
        }
    })
}

//
function addLiveValidatorToEmailInPrivate(){
    //checks email input;
    const emailInput = document.getElementById("emailInput");
    emailInput.addEventListener("input", function(e){
        if(emailIsValid(emailInput.value)){
            makeInputBoxValid("emailInput");
        }else{
            makeInputBoxInvalid("emailInput");
        }
    })

}

//
function addLiveValidatorToTelInPrivate(){
    let lastInput ="";
    //checks telephone input;
    const telInput = document.getElementById("telInput");
    telInput.addEventListener("input", function(e){
        if(telIsValid(telInput.value)){
            makeInputBoxValid("telInput");
        }else{
            makeInputBoxInvalid("telInput");
        }

        if(telInput.value.length>lastInput.length){
            if(telInput.value.length==4 || telInput.value.length==8 || telInput.value.length==11 || telInput.value.length==14){
                telInput.value+=" ";
            }
        }


        lastInput = telInput.value;
        
    })
}

//
//adds event listeners to private to update on resume live;
export function addLiveListenersPrivate(){
    addLiveListenerToNamesInPrivate();
    addLiveListenerToTelInPrivate();
    addLiveListenerToEmailInPrivate();
    addLiveListenerToAboutMeInPrivate();
}

//
function addLiveListenerToNamesInPrivate(){
    //updates name and lastName
    document.getElementById("nameInput").addEventListener("input", ()=>{
        let name = document.getElementById("nameInput").value.toUpperCase()+" "+document.getElementById("lastNameInput").value.toUpperCase();
        document.getElementById("nameParagraph").innerText = name;
    })

    document.getElementById("lastNameInput").addEventListener("input", ()=>{
        let name = document.getElementById("nameInput").value.toUpperCase()+" "+document.getElementById("lastNameInput").value.toUpperCase();
        document.getElementById("nameParagraph").innerText = name;
    })
}

//
function addLiveListenerToTelInPrivate(){
    //updates telephone number;
    document.getElementById("telInput").addEventListener("input", ()=>{
        let num = document.getElementById("telInput").value;
        if(num==""){
            document.getElementById("telImage").style.display = "none";
        }else{
            document.getElementById("telImage").style.display = "block";
        }
        document.getElementById("telParagraph").innerText = num;

    })
}

//
function addLiveListenerToEmailInPrivate(){
    //updates email input;
    document.getElementById("emailInput").addEventListener("input", ()=>{
        let num = document.getElementById("emailInput").value;
        if(num==""){
            document.getElementById("emailImage").style.display = "none";
        }else{
            document.getElementById("emailImage").style.display = "block";
        }
        document.getElementById("emailParagraph").innerText = num;

    }) 
}

//
function addLiveListenerToAboutMeInPrivate(){
    //updates about me input;
    document.getElementById("aboutMeTextField").addEventListener("input", ()=>{
        let num = document.getElementById("aboutMeTextField").value;
        if(num==""){
            document.getElementById("aboutMeTitle").style.display = "none";
        }else{
            document.getElementById("aboutMeTitle").style.display = "block";
        }
        document.getElementById("aboutMeText").innerText = num;

    }) 

}