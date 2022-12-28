import './styles.css'
import { buildTodoview } from './todoview';
import { toggleSidebar } from './toggles';
import { todoFactory, projectFactory } from './factories';
import { startOfToday, startOfTomorrow, format } from 'date-fns';
import { buildSidebarProjects, currentTab } from './sidebar';
import { formReaderTodo, formReaderProject, updateTodoFormProjects } from './formFunctions';


const projects = defaultSetup();

function defaultSetup() {
    const addTodoDate = document.querySelector("#form-add-todo #date");
    addTodoDate.setAttribute("min",format(startOfToday(),'yyyy-MM-dd'));
    
    let projects = [];

    const project0 = projectFactory("project0");
    const project1 = projectFactory("project1");

    projects.push(project0);
    projects.push(project1);

    const todo0 = todoFactory(
        "default todo",
        "description here description here description here ",
        startOfToday(),
        "Low",
        "project0"
    );
    const todo1 = todoFactory(
        "tomorrow todo",
        "description here",
        startOfTomorrow(),
        "Medium",
        "project0"
    );
    const todo2 = todoFactory(
        "tomorrow todo",
        "description here",
        startOfTomorrow(),
        "Medium",
        "project0"
    );
    const todo3 = todoFactory(
        "tomorrow todo",
        "description here",
        startOfTomorrow(),
        "Medium",
        "project1"
    );

    project0.addTodo(todo0);
    project0.addTodo(todo1);
    project0.addTodo(todo2);
    project1.addTodo(todo3);

    buildSidebarProjects(projects);
    updateTodoFormProjects(projects);
    currentTab = document.getElementById("sidebar-today");
    currentTab.classList.add("selected");
    buildTodoview(projects, "Today");


    return projects;
}

function addEventListeners() {    
    const sidebar_today = document.getElementById("sidebar-today");
    const sidebar_upcoming = document.getElementById("sidebar-upcoming");
    const sidebar_highpriority = document.getElementById("sidebar-highpriority");
    
    const sidebar_toggle = document.getElementById("sidebar-toggle");

    document.getElementById("form-add-todo").addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formReaderTodo(formData, projects);
    })
    document.getElementById("form-add-project").addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formReaderProject(formData, projects);
    })

    sidebar_toggle.addEventListener("click",()=>{
        toggleSidebar();
    });
    
    sidebar_today.addEventListener("click",()=>{
        if(!sidebar_today.classList.contains("selected")){
            currentTab.classList.remove("selected");
            currentTab = sidebar_today;
            sidebar_today.classList.add("selected");
        }
        buildTodoview(projects, "Today");
    });
    sidebar_upcoming.addEventListener("click",()=>{
        if(!sidebar_upcoming.classList.contains("selected")){
            currentTab.classList.remove("selected");
            currentTab = sidebar_upcoming;
            sidebar_upcoming.classList.add("selected");
        }
        buildTodoview(projects, "Upcoming");
    });
    sidebar_highpriority.addEventListener("click",()=>{
        if(!sidebar_highpriority.classList.contains("selected")){
            currentTab.classList.remove("selected");
            currentTab = sidebar_highpriority;
            sidebar_highpriority.classList.add("selected");
        }
        buildTodoview(projects, "HighPriority");
    });

}

addEventListeners();