import { resetDataFromPreviousPages, resetInputsEducation,} from "./resetData.js";
import { setOptionsForSelector } from "./selectorSetup.js";
import { addLiveValidatorsToEducation } from "./listeners.js";
import { resetNewEducationItem } from "./addEducation.js";
import {checkValidationEducation} from "./educationValidator.js";

if(!localStorage.getItem("counterEdu")){
    localStorage.setItem("counterEdu", 0);
}

//updates resume with previous data (private and experience);
resetDataFromPreviousPages();

//sets up selector options;
setOptionsForSelector("degreeInput0");

//if user added new education form, it resets on refresh;
resetNewEducationItem();

//adds validation checker;
addLiveValidatorsToEducation();

//resets inputs;
resetInputsEducation();

//checks validation;
checkValidationEducation();

