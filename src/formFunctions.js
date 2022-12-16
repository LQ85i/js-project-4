import { todoFactory } from "./factories";
import { currentTab } from "./sidebar";
import { buildTodoview } from './todoview';

import parseISO from "date-fns/parseISO";

const formReader = (formData, projects) => {
    const todo = todoFactory(
        formData.get("name"),
        formData.get("desc"),
        parseISO(formData.get("date")),
        formData.get("priority"),
    );
    for(let i = 0; i < projects.length; i++) {
        if(projects[i].name == formData.get("project")){
            projects[i].addTodo(todo);
            break;
        }
    }
    if(currentTab.id == "sidebar-today"){
        buildTodoview(projects, "Today");
    }
    else if(currentTab.id == "sidebar-upcoming"){
        buildTodoview(projects, "Upcoming");
    }
    else if(currentTab.id == "sidebar-highpriority"){
        buildTodoview(projects, "HighPriority");
    }
    else if(currentTab.id.includes("sidebar-project-")){
        for(let i = 0; i < projects.length; i++) {
            if(projects[i].name == currentTab.querySelector(".sidebar-text").innerHTML){
                buildTodoview([projects[i]], "Project");
                break;
            }
        }
    }
}

const updateTodoFormProjects = (projects) => {
    const project = document.getElementById("add-todo-project");
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

export { formReader, updateTodoFormProjects }