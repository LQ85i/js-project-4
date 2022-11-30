import './styles.css'
import {createPageToday} from './pageToday';
import {createPageUpcoming} from './pageUpcoming';
import {createPageHighPriority} from './pageHighPriority';
import {toggleSidebar} from './toggleSidebar';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./icons/', false, /\.(png|jpe?g|svg)$/));

const todoFactory = (name, description, dueDate, priority) => {
    return { name, description, dueDate, priority };
};

const projectFactory = (name, description, dueDate, priority) => {
    const todos = [];
    const addTodo = todo => todos.push(todo);
    const getTodos = () => todos;

    return { name, description, dueDate, priority, addTodo, getTodos };
};

function defaultSetup() {
    const project0 = projectFactory("project0","desc","due","prio");
    const todo0 = todoFactory("todo0","desc","due","prio");
    project0.addTodo(todo0);
}

function addEventListeners() {    
    const sidebar_today = document.getElementById("sidebar-today");
    const sidebar_upcoming = document.getElementById("sidebar-upcoming");
    const sidebar_highpriority = document.getElementById("sidebar-highpriority");

    const header_sidebar_toggle = document.getElementById("sidebar-toggle");

    header_sidebar_toggle.addEventListener("click",()=>{
        toggleSidebar();
    });
    
    sidebar_today.addEventListener("click",()=>{
        const todos = ""; //to be changed
        createPageToday(todos);
    });
    sidebar_upcoming.addEventListener("click",()=>{
        const todos = ""; //to be changed
        createPageUpcoming(todos);
    });
    sidebar_highpriority.addEventListener("click",()=>{
        const todos = ""; //to be changed
        createPageHighPriority(todos);
    });

}

defaultSetup();
addEventListeners();