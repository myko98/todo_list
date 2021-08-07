let addProjectButton = document.querySelector(".addProject");
let projectPanel = document.querySelector('.project-panel');
let projects = document.querySelector('.projects');
let projectName = document.querySelector('#projectName');
let projectDescription = document.querySelector('#projectDescription');

let tasks = document.querySelector('.tasks');

let modal = document.querySelector('.modal');



const openModal = () => {
    projectName.value = "";
    projectDescription.value = "";
    modal.classList.toggle("show-modal");
    
}

const addProject = () => {
    let projectDiv = document.createElement('div');
    let title = document.createElement('h1');
    title.innerText = projectName.value;
    projectDiv.appendChild(title);
    projects.appendChild(projectDiv);
    modal.classList.toggle("show-modal");
}

const addTask = () => {
    let taskDiv = document.createElement('div');
    let taskTitle = document.createElement('input');
    taskTitle.value = "Add to do item here";

    
    taskDiv.append(taskTitle);
    taskDiv.append(createPrioDropDown());

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
export {
    openModal,
    addProject,
    addTask,
};