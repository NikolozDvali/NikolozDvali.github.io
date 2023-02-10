import { eduIsValid } from "./educationValidator.js";

const goBackButton = document.getElementById("backButton");
goBackButton.addEventListener("click", function(e){
    location.assign("index.html");
})

const backButtonAtBottom = document.getElementById("goBack");
backButtonAtBottom.addEventListener("click", function(e){
    location.assign("experience.html");
})


const nextButton = document.getElementById("next");
nextButton.addEventListener("click", ()=>{
    if(eduIsValid()){
        makeDataReady();
        console.log(data);
        sendPostRequest();
       // location.assign("final.html");
    }
})

let data;

function makeDataReady(){
    data = {
        name: localStorage.getItem("nameInput"),
        surname: localStorage.getItem("lastNameInput"),
        email: localStorage.getItem("emailInput"),
        phone_number: localStorage.getItem("telInput"),
        experiences: [],
        educations: [],
        image: "",
        about_me: localStorage.getItem("aboutMeTextField")
    }
    addExperiences();
    addEducations();
    addImage();
}

function addExperiences(){
    for(let i = 0; i <= localStorage.getItem("counter"); i++){
        if(isFullyFilledExp(i)){
            let expObj = {
                position: localStorage.getItem("positionInput"+i),
                employer: localStorage.getItem("employerInput"+i),
                start_date: localStorage.getItem("startDateInput"+i),
                due_date: localStorage.getItem("endDateInput"+i),
                description: localStorage.getItem("descriptionTextField"+i)
            }
            data.experiences.push(expObj);
        }
    }
}

function isFullyFilledExp(i){
    if(localStorage.getItem("positionInput"+i).length>0 && localStorage.getItem("employerInput"+i).length>0&&localStorage.getItem("startDateInput"+i).length>0 && localStorage.getItem("endDateInput"+i).length>0 && localStorage.getItem("descriptionTextField"+i).length>0){
        return true;
    }
    return false;
}

function addEducations(){
    for(let i = 0; i <= localStorage.getItem("counterEdu"); i++){
        if(isFullyFilledEdu(i)){
            let eduObj = {
                institute: localStorage.getItem("saswavlebeliInput"+i),
                degree: localStorage.getItem("degreeInput"+i),
                due_date: localStorage.getItem("endDateInputEdu"+i),
                description: localStorage.getItem("descriptionTextFieldEducation"+i)
            }
            data.educations.push(eduObj);
        }
    }
}

function isFullyFilledEdu(i){
    if(localStorage.getItem("saswavlebeliInput"+i).length>0 && localStorage.getItem("degreeInput"+i).length>0&&localStorage.getItem("endDateInputEdu"+i).length>0 && localStorage.getItem("endDateInput"+i).length>0 && localStorage.getItem("descriptionTextFieldEducation"+i).length>0){
        return true;
    }
    return false;
}

function addImage(){
    const file = new Blob([localStorage.getItem("image")], { type: 'image/jpeg' });

    const fileReader = new FileReader();
    fileReader.onload = function(e) {
    const binaryString = e.target.result;
        data.image = binaryString;
    };

    fileReader.readAsBinaryString(file);
}


function sendPostRequest(){
        fetch("http://resume.redberryinternship.ge/api/cvs", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}
