import { addNewEducationItem, addNewEducationItemInResume } from "./newItem.js";
import { addNewEducationListeners, addLiveValidatorsEducation } from "./listeners.js";

let counterEdu = 0;

if(document.URL.indexOf("education.html") != -1){
    let button = document.getElementById("addEducation");
    button.addEventListener("click", ()=>{
        if(localStorage.getItem("counterEdu")){
            counterEdu = localStorage.getItem("counterEdu");
        }
        counterEdu++;
        localStorage.setItem("counterEdu", counterEdu);
        addNewEducationItem(counterEdu);
        addNewEducationItemInResume(counterEdu);
        addLiveValidatorsEducation(counterEdu);
        addNewEducationListeners(counterEdu);
    })
}

//
//on refresh resets additional education forms;
export function resetNewEducationItem(){
    addNewEducationListeners(0);
    for(let i = 1; i<=localStorage.getItem("counterEdu"); i++){
        addNewEducationItem(i);
        addNewEducationListeners(i);
    }
}
