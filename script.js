const checkList = document.getElementById("checklist");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(checkList.value === ''){
        alert("You must write something!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = checkList.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);   
    }
    checkList.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e){
     if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
}, false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();