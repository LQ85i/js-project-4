import { updateTodoFormProjects } from "./formFunctions";
import { buildTodoview, updatePage } from "./todoview";
import { getHighPriorityTodos, getTodayTodos, getUpcomingTodos, projectRemover } from "./factories";

let currentTab = document.createElement('div');

const buildSidebarProjects = (projects) => {
    // build projects, rest is there by default
    const sidebar_projects = document.getElementById("sidebar-projects");
    sidebar_projects.innerHTML = "";
    for(let i = 0; i < projects.length; i++) {
        const projectData = projects[i];
        const project = document.createElement('div');
        const icon = document.createElement('div');
        const text = document.createElement('div');
        const removeButton = document.createElement('button');
    
        project.classList.add("sidebar-project");
        project.classList.add("sidebar-item");
        project.id = "sidebar-project-"+i;
        icon.classList.add("icon-project");
        icon.classList.add("sidebar-icon");
        text.classList.add("sidebar-text");
        removeButton.classList.add("sidebar-project-remove");
        removeButton.classList.add("icon-delete");

        text.innerHTML = projectData.name;
    
        project.addEventListener("click",(e)=>{
            if(!e.target.classList.contains("sidebar-project-remove")) {
                if(!project.classList.contains("selected")){
                    currentTab.classList.remove("selected");
                    currentTab = project;
                    project.classList.add("selected");
                    buildTodoview([projectData], "Project");
                }
            }
        });

        removeButton.addEventListener("click",()=>{
            document.querySelector("#form-add-project #name").setCustomValidity("");
            projectRemover(project, projects);
            buildTodoview(projects, "Today");
            updatePage(projects);
            updateSidebarProjects(projects);
        });

        project.appendChild(icon);
        project.appendChild(text);
        project.appendChild(removeButton);
        sidebar_projects.appendChild(project);
    }
    
    
    
}

const setCurrentTab = (tab) => {
    currentTab = tab; 
}

const getCurrentTab = () => {
    return currentTab;
}

const updateSidebarProjects = (projects) => {
    buildSidebarProjects(projects);
    updateTodoFormProjects(projects);
}

const updateSidebarTodocount = (projects) => {
    const eToday = document.querySelector("#sidebar-today .sidebar-todocount");
    const eUpcoming = document.querySelector("#sidebar-upcoming .sidebar-todocount");
    const eHighPriority = document.querySelector("#sidebar-highpriority .sidebar-todocount");
    
    const today = getTodayTodos(projects).length;
    const upcoming = getUpcomingTodos(projects).length;
    const highPriority = getHighPriorityTodos(projects).length;

    if(today>0){
        eToday.innerHTML = today;
    } else {
        eToday.innerHTML = "";
    }
    if(upcoming>0){
        eUpcoming.innerHTML = upcoming;
    } else {
        eUpcoming.innerHTML = "";
    }
    if(highPriority>0){
        eHighPriority.innerHTML = highPriority;
    } else {
        eHighPriority.innerHTML = "";
    }
   
    
}

export { buildSidebarProjects, updateSidebarProjects, updateSidebarTodocount, setCurrentTab, getCurrentTab};