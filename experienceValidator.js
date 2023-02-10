


//
//changes visual of inputs (type=text);
export function makeInputBoxValid(str){
    document.getElementById(str).style.borderColor = "#98E37E";
    str = str+"Span";
    document.getElementById(str).style.display = "block";
    str = str+"Error";
    document.getElementById(str).style.display = "none";
}

//
export function makeInputBoxInvalid(str){
    document.getElementById(str).style.borderColor = "#EF5050";
    str = str+"Span";
    document.getElementById(str).style.display = "none";
    str = str+"Error";
    document.getElementById(str).style.display = "block";
}


//
//changes visual of inputss (type="date")
export function makeDateValid(e){
    let dateInput = document.getElementById(e);
    dateInput.style.borderColor = "#98E37E";
}

//
export function makeDateInvalid(e){
    let dateInput = document.getElementById(e);
    dateInput.style.borderColor = "#EF5050";
}

//
//changes visual of inputs (type=textarea);
export function makeTextInputBoxInvalid(str){
    document.getElementById(str).style.borderColor = "#EF5050";
}

//
export function makeTextInputBoxValid(str){
    document.getElementById(str).style.borderColor = "#98E37E";
}


//
//checks validation for jobNames;
export function checkValidationForNames(e){
    if(isValid(document.getElementById(e).value)){
        makeInputBoxValid(e);
        return true;
    }else{
        makeInputBoxInvalid(e);
        return false;
    }
}

//
function isValid(str){
    if(str.length>2){
        return true;
    }
}



// following code adds event listeners to newly created inputs;
// event listeners for both storing in localStorage and updating resume;
let counter = 0;

if(window.location.pathname==="/experience.html"){
    const button = document.getElementById("addExperience");
    button.addEventListener("click", ()=>{
        if(localStorage.getItem("counter")){
            counter = localStorage.getItem("counter");
        }
        counter++;
    })    
}


//
//these two methods have already been created but these have different parameters because are used for additional experience validation
export function makeTextInputBoxValid2(str, num){
    document.getElementById(str).style.borderColor = "#98E37E";
}

//
export function makeTextInputBoxInvalid2(str, num){
    document.getElementById(str).style.borderColor = "#EF5050";
}

//
export function checkValidationForDesc(str, i){
    if(localStorage.getItem(str)!=null && localStorage.getItem(str)!=""){
        document.getElementById(str).style.borderColor = "#98E37E";
        return true;
    }else{
        document.getElementById(str).style.borderColor = "#EF5050";
        return false;
    }
}

//
//this is used by router to determine whether go to next page or not;
export function experienceIsValid(){
    if(startedIsFilledFully()){
        return true;
    }
}

//
function startedIsFilledFully(){
    for(let i = 0; i<=localStorage.getItem("counter"); i++){
        if(formIsStarted(i)){
            if(isNotFIlled(i)){
                return false;
            }
        }
    }
    return true;
}

//
export function formIsStarted(num){
    if(localStorage.getItem("positionInput"+num) && localStorage.getItem("positionInput"+num)!=null && localStorage.getItem("positionInput"+num)!="" ||
    localStorage.getItem("employerInput"+num) && localStorage.getItem("employerInput"+num)!=null && localStorage.getItem("employerInput"+num)!=""||
    localStorage.getItem("startDateInput"+num) && localStorage.getItem("startDateInput"+num)!=null && localStorage.getItem("startDateInput"+num)!=""||
    localStorage.getItem("endDateInput"+num) && localStorage.getItem("endDateInput"+num)!=null && localStorage.getItem("endDateInput"+num)!=""||
    localStorage.getItem("descriptionTextField"+num) && localStorage.getItem("descriptionTextField"+num)!=null && localStorage.getItem("descriptionTextField"+num)!=""){
        return true;
    }
    return false;
}

//
function isNotFIlled(num){
    return !(checkValidationForNames("positionInput"+num) &&
    checkValidationForNames("employerInput"+num) &&
    checkValidationForDatesResult("startDateInput"+num) &&
    checkValidationForDatesResult("endDateInput"+num) &&
    checkValidationForDesc("descriptionTextField"+num, num))
}

function checkValidationForDatesResult(str){
    if(document.getElementById(str).value!=null){
        return true;
    }
    return false;
}
