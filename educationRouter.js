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
        "image": addImage(),
        "about_me": localStorage.getItem("aboutMeTextField"),
        "experiences": [{
            "position": "back-end developer",
            "employer": "Redberry",
            "start_date": "2019/09/09",
            "due_date": "2020/09/23",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare nunc dui, a pellentesque magna blandit dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis diam nisi, at venenatis dolor aliquet vel. Pellentesque aliquet leo nec tortor pharetra, ac consectetur orci bibendum."
          }],
        "educations": [{
            "institute": "თსუ",
            "degree_id": 7,
            "due_date": "2017/06/25",
            "description": "სამართლის ფაკულტეტის მიზანი იყო მიგვეღო ფართო თეორიული ცოდნა სამართლის არსის, სისტემის, ძირითადი პრინციპების, სამართლებრივი სისტემების, ქართული სამართლის ისტორიული წყაროების, კერძო, სისხლის და საჯარო სამართლის სფეროების ძირითადი თეორიების, პრინციპებისა და რეგულირების თავისებურებების შესახებ."
          }]
    }
    
     //addExperiences();
     //addEducations();
    
}



let experiences = [];
let educations = [];

function addExperiences(){
    // for(let i = 0; i <= localStorage.getItem("counter"); i++){
    //     if(isFullyFilledExp(i)){
    //         let expObj = {
    //             position: localStorage.getItem("positionInput"+i),
    //             employer: localStorage.getItem("employerInput"+i),
    //             start_date: localStorage.getItem("startDateInput"+i),
    //             due_date: localStorage.getItem("endDateInput"+i),
    //             description: localStorage.getItem("descriptionTextField"+i)
    //         }
    //        experiences.push(expObj);
    //     }
    // }    

    let experience = {
        "position": "Back-end Developer",
        "employer": "Redberry",
        "start_date": "2019/09/09",
        "due_date": "2020/09/23",
        "description": "Developed and maintained the company's back-end systems, which included building APIs and integrating with third-party services."
      };
      
      experiences.push(experience);     
}



function isFullyFilledExp(i){
    if(localStorage.getItem("positionInput"+i).length>0 && localStorage.getItem("employerInput"+i).length>0&&localStorage.getItem("startDateInput"+i).length>0 && localStorage.getItem("endDateInput"+i).length>0 && localStorage.getItem("descriptionTextField"+i).length>0){
        return true;
    }
    return false;
}

function modifyNumber(num){
    return num.replace(/\s+/g, '');
}

function addEducations(){
    // for(let i = 0; i <= localStorage.getItem("counterEdu"); i++){
    //     if(isFullyFilledEdu(i)){
    //         let eduObj = {
    //             institute: localStorage.getItem("saswavlebeliInput"+i),
    //             degree_id: localStorage.getItem("degreeInput"+i),
    //             due_date: localStorage.getItem("endDateInputEdu"+i),
    //             description: localStorage.getItem("descriptionTextFieldEducation"+i)
    //         }
    //         educations.push(eduObj);
    //     }
    // }

    educations.push({
        "institute": "თსუ",
        "degree_id": 7,
        "due_date": "2017/06/25",
        "description": "სამართლის ფაკულტეტის მიზანი იყო მიგვეღო ფართო თეორიული ცოდნა სამართლის არსის, სისტემის, ძირითადი პრინციპების, სამართლებრივი სისტემების, ქართული სამართლის ისტორიული წყაროების, კერძო, სისხლის და საჯარო სამართლის სფეროების ძირითადი თეორიების, პრინციპებისა და რეგულირების თავისებურებების შესახებ."
      });


    

}

function isFullyFilledEdu(i){
    if(localStorage.getItem("saswavlebeliInput"+i).length>0 && localStorage.getItem("degreeInput"+i).length>0&&localStorage.getItem("endDateInputEdu"+i).length>0 && localStorage.getItem("endDateInput"+i).length>0 && localStorage.getItem("descriptionTextFieldEducation"+i).length>0){
        return true;
    }
    return false;
}

function addImage(){
    const parts = localStorage.getItem("image").split(";base64,");
      const contentType = parts[0].split(":")[1];
      const byteCharacters = atob(parts[1]);
      const byteArrays = [];
      for (let i = 0; i < byteCharacters.length; i++) {
        byteArrays.push(byteCharacters.charCodeAt(i));
      }
      const byteArray = new Uint8Array(byteArrays);
      return new Blob([byteArray], { type: contentType });
}

const formData = new FormData();

async function sendPostRequest(){
    // for (let key in readyData) {
    //     formData.append(key, readyData[key]);
    // }

    

    // for (var pair of formData.entries()) {
    //     console.log(pair[0]+ ', ' + pair[1]);
    //   }

    await axios.post('https://resume.redberryinternship.ge/api/cvs', readyData, {
               "Content-Type": "multipart/form-data"
             }).then(res => {
    console.log(res)
    }).catch(error => {
    console.error(error)
    })
      
}

