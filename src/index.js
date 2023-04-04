import './styles.css'
import { buildTodoview, updatePage } from './todoview';
import { toggleSidebar } from './toggles';
import { startOfToday, format } from 'date-fns';
import { buildSidebarProjects, setCurrentTab } from './sidebar';
import { formReaderTodo, formReaderProject, updateTodoFormProjects } from './formFunctions';
import { loadProjects, saveProject, saveTodo } from './storage';
import { projectFactory, todoFactory } from './factories';


const projects = defaultSetup();

function defaultSetup() {
    const addTodoDate = document.querySelector("#form-add-todo #date");
    addTodoDate.setAttribute("min", format(startOfToday(), 'yyyy-MM-dd'));
    addTodoDate.valueAsDate = new Date();

    let projects = loadProjects();
    if (projects == -1 || projects == null) {
        let defaultProject = projectFactory("default project")
        let defaultTodo = todoFactory(
            "default todo",
            "default description",
            new Date(),
            "Low",
            defaultProject.name,
            false
        )
        defaultProject.addTodo(defaultTodo);
        saveTodo(defaultTodo);
        saveProject(defaultProject);
        projects = [defaultProject];
    }
    buildSidebarProjects(projects);
    updateTodoFormProjects(projects);
    updatePage(projects);
    setCurrentTab(document.getElementById("sidebar-today"));

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
        const projectName = formData.get("name");
        const nameInput = document.querySelector("#form-add-project #name");
        let nameIsUnique = true;
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].name == projectName) {
                nameIsUnique = false;
            }
        }
        if (nameIsUnique) {
            nameInput.setCustomValidity("");
            formReaderProject(formData, projects);
        }
        else {
            nameInput.setCustomValidity("Project names must be unique.");
            nameInput.reportValidity();
        }

    })

    sidebar_toggle.addEventListener("click", () => {
        toggleSidebar();
    });

    sidebar_today.addEventListener("click", () => {
        if (!sidebar_today.classList.contains("selected")) {
            setCurrentTab(sidebar_today);
            sidebar_today.classList.add("selected");
        }
        buildTodoview(projects, "Today");
    });
    sidebar_upcoming.addEventListener("click", () => {
        if (!sidebar_upcoming.classList.contains("selected")) {
            setCurrentTab(sidebar_upcoming);
            sidebar_upcoming.classList.add("selected");
        }
        buildTodoview(projects, "Upcoming");
    });
    sidebar_highpriority.addEventListener("click", () => {
        if (!sidebar_highpriority.classList.contains("selected")) {
            setCurrentTab(sidebar_highpriority);
            sidebar_highpriority.classList.add("selected");
        }
        buildTodoview(projects, "HighPriority");
    });

}

addEventListeners();