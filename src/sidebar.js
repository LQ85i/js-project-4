import { buildTodoview } from "./todoview";

let currentTab = document.createElement('div');

const initSidebar = (projects) => {
    // build projects, rest is there by default

    for(let i = 0; i < projects.length; i++) {
        const projectData = projects[i];
        const parent = document.getElementById("sidebar-projects");
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
        parent.appendChild(project)
    }
    
    
    
}

export { initSidebar, currentTab };