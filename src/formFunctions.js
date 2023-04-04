import { projectFactory, todoFactory } from "./factories";
import { updatePage } from './todoview';
import { updateSidebarProjects, updateSidebarTodocount } from "./sidebar";
import { saveTodo, saveProject } from './storage';

import parseISO from "date-fns/parseISO";

const formReaderTodo = (formData, projects) => {
    const todo = todoFactory(
        formData.get("name"),
        formData.get("desc"),
        parseISO(formData.get("date")),
        formData.get("priority"),
        formData.get("project"),
    );
    for(let i = 0; i < projects.length; i++) {
        if(projects[i].name == formData.get("project")){
            projects[i].addTodo(todo);
            saveTodo(todo);
            break;
        }
    }
    updatePage(projects);
}

const formReaderProject = (formData, projects) => {
    const projectName = formData.get("name");
    const project = projectFactory(projectName);
    projects.push(project);
    saveProject(project);
    updatePage(projects);
    updateSidebarProjects(projects);
}

const updateTodoFormProjects = (projects) => {
    const project = document.querySelector("#form-add-todo #project");
    project.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.setAttribute("value","");
    defaultOption.setAttribute("disabled","");
    defaultOption.setAttribute("selected","");
    defaultOption.setAttribute("hidden","");
    defaultOption.innerHTML = "Project...";
    project.appendChild(defaultOption);

    for(let i = 0; i < projects.length; i++) {
        const option = document.createElement("option");
        option.setAttribute("value", projects[i].name);
        option.innerHTML = projects[i].name;
        project.appendChild(option);
    }

}

export { formReaderTodo, formReaderProject, updateTodoFormProjects }