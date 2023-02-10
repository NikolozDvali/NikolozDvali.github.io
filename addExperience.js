import { addLiveValidatorsExperience, addNewExperienceListeners } from "./listeners.js";
import { addNewExperienceItemInResume, addNewExperienceItem } from "./newItem.js";
let counter = 0;

//onclick adds new experience form item and resume item, adds live validators for newly created inputs;
if(window.location.pathname==="/experience.html"){
    const button = document.getElementById("addExperience");
    button.addEventListener("click", ()=>{
        if(localStorage.getItem("counter")){
            counter = localStorage.getItem("counter");
        }
        counter++;
        localStorage.setItem("counter", counter);
        addNewExperienceItem(counter);
        addNewExperienceItemInResume(counter);
        addLiveValidatorsExperience(counter);
        addNewExperienceListeners(counter);
        document.body.style.height = (document.body.offsetHeight + 65) + "px";
    })
}




//
//on refresh resets new experience forms;
export function resetNewExperienceItem(){
    addNewExperienceListeners(0);
    for(let i = 1; i<=localStorage.getItem("counter"); i++){
        addNewExperienceItem(i);
        addNewExperienceListeners(i);
    }
}
