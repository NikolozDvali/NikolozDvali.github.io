
//checks name and lastName criteria;
export function isValid(str){
    if(str.length>2 && isGeorgian(str.replace(/ /g, ""))){
        return true;
    }
}
//checks if string is georgian;
function isGeorgian(str){
    const georgianRegex = /^[\u10A0-\u10FF]+$/;
    return georgianRegex.test(str);
}

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
//changes visual of inputs (type=textarea);
export function makeTextInputBoxNormal(str){
    document.getElementById(str).style.borderColor = "#BCBCBC";
}
export function makeTextInputBoxValid(str){
    document.getElementById(str).style.borderColor = "#98E37E";

}

//checks if email ends with @redberry.ge
export function emailIsValid(str){
    return str.endsWith("@redberry.ge");
} 

//checks number format;
export function telIsValid(str){
    if(str.length>=17){
        str = removeTrailingSpaces(str);
        const phoneNumberRegex = /^(\+995)?[0-9]{9}$/;
        return (phoneNumberRegex.test(removeSpaces(str))&&spaceIndexesAreGood(str));
    }else{
        return false;
    }
}

//if number has spaces at right that have nothing on right side, removes them; 
function removeTrailingSpaces(str) {
    let end = str.length - 1;
    while (end >= 0 && str[end] === ' ') {
      end--;
    }
    return str.substring(0, end + 1);
  }

function removeSpaces(str) {
    return str.replace(/\s+/g, '');
  }


//checks space positions in number;
function spaceIndexesAreGood(str){
  for(let i = 0; i<str.length; i++){
    if(i == 4 || i == 8 || i == 11 || i == 14){
        if(str[i]!=" "){
            return false;
        }
    }else{
        if(str[i]==" "){
            return false;
        }
    }
  }
  return true;
}

//
//to check validation after refresh:
export function checkValidationAfterRefresh(){
    if(localStorage.getItem("nameInput")!="" && localStorage.getItem("nameInput")!=null){
        checkValidationForNames("nameInput");
    }
    if(localStorage.getItem("lastNameInput")!="" && localStorage.getItem("lastNameInput")!=null){
        checkValidationForNames("lastNameInput");
    }
    if(localStorage.getItem("aboutMeTextField")!="" && localStorage.getItem("aboutMeTextField")!=null){
        if(document.getElementById("aboutMeTextField").value.length>0){
            makeTextInputBoxValid("aboutMeTextField");
        }else{
            makeTextInputBoxNormal("aboutMeTextField");
    }}
    
    if(localStorage.getItem("emailInput")!="" && localStorage.getItem("emailInput")!=null){
        if(emailIsValid(emailInput.value)){
            makeInputBoxValid("emailInput");
        }else{
            makeInputBoxInvalid("emailInput");
    }}
    
    if(localStorage.getItem("telInput")!="" && localStorage.getItem("telInput")!=null){
        if(telIsValid(telInput.value)){
            makeInputBoxValid("telInput");
        }else{
            makeInputBoxInvalid("telInput");
        }
    }
    
    if(localStorage.getItem("image")!="" && localStorage.getItem("image")!=null){
        document.getElementById("photoInputSpan").style.display="block";
    }
}

//
function checkValidationForNames(e){
    if(isValid(document.getElementById(e).value)){
        makeInputBoxValid(e);
    }else{
        makeInputBoxInvalid(e);
    }
}

//
export function privateIsValid(){
    if(isValid(nameInput.value) && isValid(lastNameInput.value) && emailIsValid(emailInput.value) && telIsValid(telInput.value) && localStorage.getItem("image")){
        return true;
    }else{
        return false;
    }
}


