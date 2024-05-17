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
    const projectP = document.createElement('p');
    projectP.textContent = projectName;
    projectP.classList.add('name');

    const check = document.createElement('input');
    check.type = 'checkbox';

    projectDiv.appendChild(projectP);
    projectDiv.appendChild(check);
    projectField.appendChild(projectDiv);
};


window.onload = function() {
    for (let project of allProjects) {
        displayProjects(project);
    }
};