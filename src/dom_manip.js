let addProjectButton = document.querySelector(".addProject");
let projectPanel = document.querySelector('.project-panel');
let projects = document.querySelector('.projects');
let projectName = document.querySelector('#projectName');
let projectDescription = document.querySelector('#projectDescription');
let tasks = document.querySelector('.tasks');
let modal = document.querySelector('.modal');


//sets classname variables for todolist 
let classNum = 0;
let currentClassNum = 0;



const openModal = () => {
    projectName.value = "";
    projectDescription.value = "";
    modal.classList.toggle("show-modal");
}

//when modal submit button is pressed, add project
const addProject = () => {
    let projectDiv = document.createElement('div');
    let title = document.createElement('h1');
    let projectTitle = projectName.value;
    let desc = document.createElement('p');
    let projectDesc = projectDescription.value;
    
    //saves description info from modal onto a hidden variable...
    desc.innerText = projectDesc;
    desc.style.display = "none";

    title.innerText = projectTitle;
    title.classList.add(classNum);

    projectDiv.appendChild(title);
    projectDiv.appendChild(desc);
    //**set class number for every project
    projectDiv.classList.add(classNum);
    classNum ++;

//if project is clicked, run a function that opens all the todo items with classname projectTitle on main panel


    projectDiv.addEventListener("click", function(e) {
        //gets current classNum from project
        currentClassNum = e.target.classList[0];
        //creates array from nodeList of all todoTask
        let toDoArray = Array.from(tasks.childNodes);
        
        //function that filters todo tasks
        //if the project class name == class nam of toDo tasks, then display is shown, else display is none (hidden)
        for (let toDo of toDoArray) {
            console.log(currentClassNum + "todo className:" + toDo.className);
            if (toDo.className == currentClassNum) {
                toDo.style.display = "block";
            } else {
                toDo.style.display = "none"
            }
        }
        console.log(toDoArray);
    })
    projectDiv.addEventListener("click",function() {
        //updates header info on main panel
        mainHeader(String(projectTitle),String(projectDesc))
        });


    projects.appendChild(projectDiv);
    modal.classList.toggle("show-modal");
}


const addTask = () => {
    let taskDiv = document.createElement('div');
    let taskTitle = document.createElement('input');
    let taskDueDate = document.createElement('input');

    taskDueDate.setAttribute("type","date");
    taskDueDate.setAttribute("value", "2021-08-09");
    taskTitle.value = "Add to do item here";

    taskDiv.classList.add(currentClassNum);
    console.log("task has " + currentClassNum + "class number")
    taskDiv.append(taskTitle);
    taskDiv.append(createPrioDropDown());
    taskDiv.append(taskDueDate);

    tasks.appendChild(taskDiv)
}

const createPrioDropDown = () => {
    let dropDown = document.createElement('select');
    let high = document.createElement('option');
    let mid = document.createElement('option');
    let low = document.createElement('option');

    high.innerText = "HIGH";
    mid.innerText = "MEDIUM";
    low.innerText = "LOW";

    dropDown.append(low,mid,high);
    return dropDown;
}

//updates main panel header and description when a project is clicked
function mainHeader(title,desc) {
    let projectTitle = document.querySelector("#mainTitle");
    let projectDesc = document.querySelector("#mainDesc");
     
    projectTitle.innerText = title;
    projectDesc.innerText = desc;
}

//adds note
function addNote() {
    let note = document.createElement('div');
}
export {
    openModal,
    addProject,
    addTask,
};