import { setOptionsForSelector } from "./selectorSetup.js";

//
//adds new item in a grid (experience);
export function addNewExperienceItem(num){
    let item = document.createElement("div");
    item.setAttribute("class", "item");
    document.querySelector("form").appendChild(item);
    addConts(item, num);
}


//
function addConts(e, num){
    let posCont = document.createElement("div");
    posCont.setAttribute("class", "cont");
    posCont.setAttribute("id", "tanamdeboba"+num);
    e.appendChild(posCont);
    addPosContInside(posCont, num);

    let empCont = document.createElement("div");
    empCont.setAttribute("class", "cont");
    empCont.setAttribute("id", "damsaqmebeli"+num);
    e.appendChild(empCont);
    addEmpContInside(empCont, num);

    let tarCont = document.createElement("div");
    tarCont.setAttribute("class", "cont tarigebi");
    e.appendChild(tarCont);
    addDateContInside(tarCont, num);

    let agwCont = document.createElement("div");
    agwCont.setAttribute("class", "cont");
    agwCont.setAttribute("id", "agwera"+num);
    e.appendChild(agwCont);
    addAgwContInside(agwCont, num);

    let hr = document.createElement("hr");
    hr.setAttribute("class", "betweenItems");
    e.appendChild(hr);
}

//
function addPosContInside(e, num){
    let lab = document.createElement("label");
    lab.setAttribute("for", "positionInput"+num);
    lab.setAttribute("class", "labels")
    lab.innerText = "თანამდებობა";
    e.appendChild(lab);

    let inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("name", "positionInput"+num);
    inp.setAttribute("id", "positionInput"+num);
    inp.setAttribute("class", "inputs");
    inp.setAttribute("placeholder", "დეველოპერი, დიზაინერი, ა.შ.");
    inp.onkeyup  = (e) => {
        var id = "positionInput"+num; 
        var val = inp.value; 
        localStorage.setItem(id, val);
    };
    e.appendChild(inp);

    let span = document.createElement("span");
    span.setAttribute("id", "positionInput"+num+"Span");
    span.style.display = "none";
    span.style.position = "absolute";
    span.style.top = "52px";
    span.style.left = "782.75px";
    e.appendChild(span);

    let img = document.createElement("img");
    img.src = "images/check.png";
    span.appendChild(img);

    let spanError= document.createElement("span");
    spanError.setAttribute("id", "positionInput"+num+"SpanError");
    spanError.style.display = "none";
    spanError.style.position = "absolute";
    spanError.style.top = "52px";
    spanError.style.left = "841px";
    e.appendChild(spanError);

    let imgError = document.createElement("img");
    imgError.src = "images/error.png";
    spanError.appendChild(imgError);

    let p = document.createElement("p");
    p.setAttribute("class", "underInput");
    p.innerText = "მინიმუმ 2 სიმბოლო";
    e.appendChild(p);
}

//
function addEmpContInside(e, num){
    let lab = document.createElement("label");
    lab.setAttribute("for", "employer"+num);
    lab.setAttribute("class", "labels")
    lab.innerText = "დამსაქმებელი";
    e.appendChild(lab);

    let inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("name", "employerInput"+num);
    inp.setAttribute("id", "employerInput"+num);
    inp.setAttribute("class", "inputs");
    inp.setAttribute("placeholder", "დამსაქმებელი");
    inp.onkeyup  = (e) => {
        var id = "employerInput"+num; 
        var val = inp.value; 
        localStorage.setItem(id, val);
    };
    e.appendChild(inp);

    let span = document.createElement("span");
    span.setAttribute("id", "employerInput"+num+"Span");
    span.style.display = "none";
    span.style.position = "absolute";
    span.style.top = "52px";
    span.style.left = "782.75px";
    e.appendChild(span);

    let img = document.createElement("img");
    img.src = "images/check.png";
    span.appendChild(img);

    let spanError= document.createElement("span");
    spanError.setAttribute("id", "employerInput"+num+"SpanError");
    spanError.style.display = "none";
    spanError.style.position = "absolute";
    spanError.style.top = "52px";
    spanError.style.left = "841px";
    e.appendChild(spanError);

    let imgError = document.createElement("img");
    imgError.src = "images/error.png";
    spanError.appendChild(imgError);

    let p = document.createElement("p");
    p.setAttribute("class", "underInput");
    p.innerText = "მინიმუმ 2 სიმბოლო";
    e.appendChild(p);
}

//
function addDateContInside(e, num){
    addStartDateCont(e, num);
    addEndDateCont(e, num);
}

//
function addStartDateCont(e, num){
    let div = document.createElement("div");
    div.setAttribute("class", "startDate");
    e.appendChild(div);

    let lab = document.createElement("label");
    lab.setAttribute("for", "startDateInput"+num);
    lab.setAttribute("class", "dateLabels");
    lab.innerText = "დაწყების რიცხვი";
    div.appendChild(lab);

    let inp = document.createElement("input");
    inp.setAttribute("id", "startDateInput"+num);
    inp.setAttribute("name", "startDateInput"+num);
    inp.setAttribute("type", "date");
    inp.setAttribute("class", "dateInputs");
    inp.onchange  = (e) => {
        var id = "startDateInput"+num; 
        var val = inp.value; 
        localStorage.setItem(id, val);
    };
    div.appendChild(inp);
}

//
function addEndDateCont(e, num){
    let div = document.createElement("div");
    div.setAttribute("class", "endDate");
    e.appendChild(div);

    let lab = document.createElement("label");
    lab.setAttribute("for", "endDateInput"+num);
    lab.setAttribute("class", "dateLabels");
    lab.innerText = "დამთავრების რიცხვი";
    div.appendChild(lab);

    let inp = document.createElement("input");
    inp.setAttribute("id", "endDateInput"+num);
    inp.setAttribute("name", "endDateInput"+num);
    inp.setAttribute("type", "date");
    inp.setAttribute("class", "dateInputs");
    inp.onchange  = (e) => {
        var id = "endDateInput"+num; 
        var val = inp.value; 
        localStorage.setItem(id, val);
    };
    div.appendChild(inp);
}

//
function addAgwContInside(e, num){
    let lab = document.createElement("label");
    lab.setAttribute("for", "descriptionTextField"+num);
    lab.setAttribute("class", "labels");
    lab.innerText ="აღწერა";
    e.appendChild(lab);

    let tarea = document.createElement("textarea");
    tarea.setAttribute("name", "descriptionTextField"+num);
    tarea.setAttribute("id", "descriptionTextField"+num);
    tarea.setAttribute("class", "bigInputs");
    tarea.setAttribute("rows", "4");
    tarea.setAttribute("placeholder", "როლი თანამდებობაზე და ზოგადი აღწერა");
    tarea.onkeyup  = (e) => {
        var id = "descriptionTextField"+num; 
        var val = tarea.value; 
        localStorage.setItem(id, val);
    };
    e.appendChild(tarea);
}

//
//adds new resume item (experience)
export function addNewExperienceItemInResume(num){
    addJobName(num);
    addDates(num);
    addDesc(num);
}

//
function addJobName(num){
    let name = document.createElement("p");
    name.setAttribute("class", "experienceNameParagraph");
    name.setAttribute("id", "jobName"+num);
    document.querySelector("#experienceGrid").appendChild(name);
}

//
function addDates(num){
    let dates = document.createElement("p");
    dates.setAttribute("class", "experienceDatesParagraph");
    dates.setAttribute("id", "dates"+num);
    document.querySelector("#experienceGrid").appendChild(dates);
}

//
function addDesc(num){
    let desc = document.createElement("p");
    desc.setAttribute("class", "experienceTextParagraph");
    desc.setAttribute("id", "jobdesc"+num);
    document.querySelector("#experienceGrid").appendChild(desc);
}

//
export function addNewEducationItem(num){
    addNewEducationItemInForm(num);
}

//
//adds new education item in form;
function addNewEducationItemInForm(num){
    let itemDiv = document.createElement("div");
    itemDiv.setAttribute("class", "item");
    document.querySelector(".form").appendChild(itemDiv, num);
    addSaswavlebeliDiv(itemDiv, num);
    addDegreeAndDateDiv(itemDiv, num);
    addAgweraDiv(itemDiv, num);
    addHr(itemDiv, num);
}

//
function addSaswavlebeliDiv(e, num){
    let div = document.createElement("div");
    div.setAttribute("class", "saswavlebeli");
    div.setAttribute("class", "cont");
    
    let lab = document.createElement("label");
    lab.setAttribute("for", "saswavlebeliInput"+num);
    lab.setAttribute("class", "labels");
    lab.innerText = "სასწავლებელი";
    div.appendChild(lab);

    let inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("name", "saswavlebeliInput"+num);
    inp.setAttribute("id", "saswavlebeliInput"+num);
    inp.setAttribute("class", "inputs");
    inp.setAttribute("placeholder", "სასწავლებელი");
    div.appendChild(inp);

    let img = document.createElement("img");
    img.src = "images/check.png";
    let span = document.createElement("span");
    span.setAttribute("id", "saswavlebeliInput"+num+"Span")
    span.setAttribute("class", "spans");
    span.appendChild(img);
    div.appendChild(span);

    let imgE = document.createElement("img");
    imgE.src = "images/error.png";
    let spanE = document.createElement("span");
    spanE.setAttribute("id", "saswavlebeliInput"+num+"SpanError")
    spanE.setAttribute("class", "spanErrors");
    spanE.appendChild(imgE);
    div.appendChild(spanE);

    let un = document.createElement("p");
    un.setAttribute("class", "underInput");
    un.innerText = "მინიმუმ 2 სიმბოლო";
    div.appendChild(un);

    e.appendChild(div);
}

//
function addDegreeAndDateDiv(e, num){
    let div = document.createElement("div");
    div.setAttribute("class", "cont degreeAndDate");
    e.appendChild(div);
    addDegree(div, num);
    addDate(div, num);
}

//
function addDegree(e, num){
    let div = document.createElement("div");
    div.setAttribute("class", "degree");
    
    let lab = document.createElement("label");
    lab.setAttribute("for", "degreeInput"+num);
    lab.setAttribute("class", "labels");
    lab.innerText="ხარისხი";
    div.appendChild(lab);

    let select = document.createElement("select");
    select.setAttribute("id","degreeInput"+num);
    select.setAttribute("name", "degreeInput"+num);
    select.setAttribute("class", "dropInputs");
    let opt = document.createElement("option");
    opt.setAttribute("value", "");
    opt.setAttribute("disabled", "");
    opt.setAttribute("selected", "");
    opt.setAttribute("hidden", "");
    opt.innerText="აირჩიეთ ხარისხი";
    setOptionsForSelector("degreeInput"+num);

    select.appendChild(opt);
    div.appendChild(select);

    let span = document.createElement("span");
    span.setAttribute("class", "arrowImage");
    let img = document.createElement("img");
    img.src = "images/arrow.png";
    span.appendChild(img);
    div.appendChild(span);

    e.appendChild(div);
}

//
function addDate(e, num){
    let div = document.createElement("div");
    div.setAttribute("class", "endDate");

    let lab = document.createElement("label");
    lab.setAttribute("for", "endDateInputEdu"+num);
    lab.setAttribute("class", "dateLabels");
    lab.innerText = "დამთავრების რიცხვი";
    div.appendChild(lab);

    let inp = document.createElement("input");
    inp.setAttribute("type", "date");
    inp.setAttribute("name", "endDateInputEdu"+num);
    inp.setAttribute("id", "endDateInputEdu"+num);
    inp.setAttribute("class", "dateInputs");
    div.appendChild(inp);

    e.appendChild(div);
}

//
function addAgweraDiv(e, num){
    let div = document.createElement("div");
    div.setAttribute("class", "agwera cont");

    let lab = document.createElement("label");
    lab.setAttribute("for", "descriptionTextFieldEducation"+num);
    lab.setAttribute("class", "labels");
    lab.innerText ="აღწერა";
    div.appendChild(lab);

    let ta = document.createElement("textArea");
    ta.setAttribute("name", "descriptionTextFieldEducation"+num);
    ta.setAttribute("id", "descriptionTextFieldEducation"+num);
    ta.setAttribute("class", "bigInputs");
    ta.setAttribute("placeholder", "განათლების აღწერა");
    div.appendChild(ta);

    e.appendChild(div);
}

//
function addHr(e){
    let hr = document.createElement("hr");
    hr.setAttribute("class", "betweenItems");
    e.appendChild(hr);
}

//
//adds new education item in resume;
export function addNewEducationItemInResume(num){
    addEduName(num);
    addEduDate(num);
    addEduDesc(num);
}

//
function addEduName(num){
    let p = document.createElement("p");
    p.setAttribute("class", "educationNameParagraph");
    p.setAttribute("id", "eduName"+num);
    document.getElementById("educationGrid").appendChild(p);
}

//
function addEduDate(num){
    let p = document.createElement("p");
    p.setAttribute("class", "educationDatesParagraph");
    p.setAttribute("id", "eduDate"+num);
    document.getElementById("educationGrid").appendChild(p);
}

//
function addEduDesc(num){
    let p = document.createElement("p");
    p.setAttribute("class", "educationTextParagraph");
    p.setAttribute("id", "eduDesc"+num);
    document.getElementById("educationGrid").appendChild(p);
}

