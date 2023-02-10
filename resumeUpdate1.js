const resume = document.getElementById("resume");

//
//to update on refresh;
export function updateOnRefreshPrivate(){
    //name and last name
    if(localStorage.getItem("nameInput")){
        if(localStorage.getItem("nameInput")!=""){
            let name = localStorage.getItem("nameInput").toUpperCase();
            if(localStorage.getItem("lastNameInput")){
                if(localStorage.getItem("lastNameInput")!=""){
                    name+=" "+ localStorage.getItem("lastNameInput").toUpperCase();
                }
            }
            document.getElementById("nameParagraph").innerText = name;
        }
    }

    if(localStorage.getItem("lastNameInput")){
        if(localStorage.getItem("lastNameInput")!=""){
            if(localStorage.getItem("nameInput")){
                if(localStorage.getItem("nameInput")!=""){
                    let name = localStorage.getItem("nameInput").toUpperCase() + " " +localStorage.getItem("lastNameInput").toUpperCase();
                    document.getElementById("nameParagraph").innerText = name;
                }
            }else{
                let name = localStorage.getItem("lastNameInput").toUpperCase();
                document.getElementById("nameParagraph").innerText = name;
            }
        }
    }

    //telephone number
    if(localStorage.getItem("telInput")){
        if(localStorage.getItem("telInput")!=""){
            let num = localStorage.getItem("telInput");
            if(num==""){
                document.getElementById("telImage").style.display = "none";
            }else{
                document.getElementById("telImage").style.display = "block";
            }
            document.getElementById("telParagraph").innerText = num;        
        }
    }

    //email adress
    if(localStorage.getItem("emailInput")){
        if(localStorage.getItem("emailInput")!=""){
            let email = localStorage.getItem("emailInput");
            if(email==""){
                document.getElementById("emailImage").style.display = "none";
            }else{
                document.getElementById("emailImage").style.display = "block";
            }
            document.getElementById("emailParagraph").innerText = email;        
        }
    }

    //about me 
    if(localStorage.getItem("aboutMeTextField")){
        if(localStorage.getItem("aboutMeTextField")!=""){
            let info = localStorage.getItem("aboutMeTextField");
            if(info==""){
                document.getElementById("aboutMeTitle").style.display = "none";
            }else{
                document.getElementById("aboutMeTitle").style.display = "block";
            }
            document.getElementById("aboutMeText").innerText = info;        
        }
    }
}
