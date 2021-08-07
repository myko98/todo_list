import {openModal, addProject, addTask} from './dom_manip.js';
import {toDoItem} from  './objects.js';

let projectButton = document.querySelector('.addProject');
let closeButton = document.querySelector('.close-button');

let modalCancel = document.querySelector('.cancel');
let modalSubmit = document.querySelector('.submit');

let addTaskButton = document.querySelector(".addTask");




projectButton.onclick = openModal
closeButton.addEventListener("click",openModal);
modalCancel.onclick = openModal;
modalSubmit.onclick = addProject;

let item = new toDoItem("walking cat", "at night", "high", "today");
console.log(item);

addTaskButton.onclick = addTask;
