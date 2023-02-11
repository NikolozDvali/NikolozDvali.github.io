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
        sendPostRequest();
       // location.assign("final.html");
    }
})


let readyData;

function makeDataReady(){


    readyData = {
        "name": localStorage.getItem("nameInput"),
        "surname": localStorage.getItem("lastNameInput"),
        "email": localStorage.getItem("emailInput"),
        "phone_number": modifyNumber(localStorage.getItem("telInput")),
        "experiences": [],
        "educations": [],
        "image": "",
        "about_me": localStorage.getItem("aboutMeTextField")
    }
     addExperiences();
     addEducations();
     addImage();
}

function modifyNumber(num){
    return num.replace(/\s+/g, '');
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
            readyData.experiences.push(expObj);
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
            readyData.educations.push(eduObj);
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
    const base64Image = localStorage.getItem("image");
    const binaryString = atob(base64Image.split(',')[1]);
    const array = new Uint8Array(binaryString.length);


    for (let i = 0; i < binaryString.length; i++) {
        array[i] = binaryString.charCodeAt(i);
      }
    
      const blob = new Blob([array], { type: 'image/jpeg' });

    readyData.image = blob;
}

const formData = new FormData();

async function sendPostRequest(){
    for (let key in readyData) {
        formData.append(key, readyData[key]);
    }



    
    for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }
   

    await axios.post('https://resume.redberryinternship.ge/api/cvs', formData, {
               "Content-Type": "multipart/form-data"
             }).then(res => {
    console.log(res)
    }).catch(error => {
    console.error(error)
    })
      
}

