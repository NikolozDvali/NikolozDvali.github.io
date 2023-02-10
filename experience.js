
import { resetDataFromPreviousPages} from "./resetData.js";
import { addLiveValidatorsExperience } from "./listeners.js";
import {  checkValidationExperience, resetInputsExperience } from "./afterRefresh.js";
import { resetNewExperienceItem } from "./addExperience.js";



//resets data in resume;
resetDataFromPreviousPages();

resetNewExperienceItem();

addLiveValidatorsExperience();

resetInputsExperience();

checkValidationExperience();


