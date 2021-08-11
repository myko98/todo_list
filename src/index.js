import {openModal, addProject, addTask} from './dom_manip.js';
import {toDoItem} from  './objects.js';

let projectButton = document.querySelector('.addProject');
let closeButton = document.querySelector('.close-button');

let modalCancel = document.querySelector('.cancel');
let modalSubmit = document.querySelector('.submit');

let addTaskButton = document.querySelector(".addTask");



projectButton.onclick = openModal;
// projectButton.addEventListener("click",addClass);
closeButton.addEventListener("click",openModal);
modalCancel.onclick = openModal;
modalSubmit.onclick = addProject;


addTaskButton.onclick = addTask;


//create default project
