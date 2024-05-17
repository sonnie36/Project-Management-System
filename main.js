const addProject = document.querySelector('.addBtn');
const projectInput = document.querySelector('.projectInput');
const projectField = document.querySelector('.projectField');

let allProjects = JSON.parse(localStorage.getItem('projects')) || [];

addProject.addEventListener('click', () => {
    const inputValue = projectInput.value;
    if (inputValue === '') {
        alert('Input a project');
    } else {
        allProjects.push(inputValue);
        localStorage.setItem('projects', JSON.stringify(allProjects));
        displayProjects(inputValue);
        projectInput.value = '';
    }
});

const displayProjects = (projectName) => {
    const projectDiv = document.createElement('div'); 
    projectDiv.classList.add('container');

    const projectP = document.createElement('p');
    projectP.textContent = projectName;
    projectP.classList.add('name');

    const events = document.createElement('div')
    events.classList.add('event')
    
    const check = document.createElement('input');
    check.type = 'checkbox';


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "delete";
    deleteBtn.addEventListener('click', function() {
        this.parentElement.remove();
        allProjects = allProjects.filter(project => project !== projectName);
        localStorage.setItem('projects', JSON.stringify(allProjects));
    });

    projectDiv.appendChild(projectP);
    events.appendChild(check)
    events.appendChild(deleteBtn)
    projectDiv.appendChild(events); 
    projectField.appendChild(projectDiv);
};


window.onload = function() {
    for (let project of allProjects) {
        displayProjects(project);
    }
};