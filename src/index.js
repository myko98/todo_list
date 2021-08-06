import {addProject} from './dom_manip.js';

let projectButton = document.querySelector('.addProject');
let closeButton = document.querySelector('.close-button');


projectButton.onclick = addProject
closeButton.addEventListener("click",addProject);



