let addProjectButton = document.querySelector(".addProject");
let projectPanel = document.querySelector('.project-panel');
let modal = document.querySelector('.modal');



const addProject = () => {
    let projectDiv = document.createElement("div");
    modal.classList.toggle("show-modal");
}


export {addProject};