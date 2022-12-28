import { updateTodoFormProjects } from "./formFunctions";
import { buildTodoview } from "./todoview";

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
    
        project.classList.add("sidebar-project");
        project.classList.add("sidebar-item");
        project.id = "sidebar-project-"+i;
        icon.classList.add("icon-project");
        icon.classList.add("sidebar-icon");
        text.classList.add("sidebar-text");
    
        text.innerHTML = projectData.name;
    
        project.addEventListener("click",()=>{
            if(!project.classList.contains("selected")){
                currentTab.classList.remove("selected");
                currentTab = project;
                project.classList.add("selected");
                buildTodoview([projectData], "Project");
            }
        });
    
        project.appendChild(icon);
        project.appendChild(text);
        sidebar_projects.appendChild(project)
    }
    
    
    
}

const updateSidebarProjects = (projects) => {
    buildSidebarProjects(projects);
    updateTodoFormProjects(projects);
}

export { buildSidebarProjects, updateSidebarProjects, currentTab };