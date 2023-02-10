let arr;

export function setOptionsForSelector(id){
    getData(id)
    
}

async function getData(id){
    fetch('https://resume.redberryinternship.ge/api/degrees', {
    headers: {
        'Accept': 'application/json',
    }})
    .then(response => response.json())
    .then(data => {
        arr = data;
        addOptions(id);
    });
}

function addOptions(id){
    for(let i = 0; i<arr.length; i++){
        let opt = document.createElement("option");
        opt.setAttribute("value", arr[i].title);
        opt.innerText = arr[i].title;
        opt.setAttribute("id", arr[i].id);
        document.getElementById(id).appendChild(opt);
    }
}

