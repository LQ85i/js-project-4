import { toggleTodoDescription } from "./toggles";
import { format } from "date-fns";
import { getCurrentTab } from "./sidebar";
import { getHighPriorityTodos, getUpcomingTodos, getTodayTodos, todoRemover, completeTodo } from "./factories";

const buildTodoview = (projects, filter) => {

    const todoview = document.getElementById("todoview");
    todoview.innerHTML = "";

    //labels
    const labels = document.createElement('div');

    labels.classList.add("labels");

    const label_name = document.createElement('div');
    const label_duedate = document.createElement('div');
    const label_priority = document.createElement('div');
    const label_actions = document.createElement('div');

    label_name.classList.add("label-name");
    label_duedate.classList.add("label-duedate");
    label_priority.classList.add("label-priority");
    label_actions.classList.add("label-actions");
    
    label_name.innerHTML = "Task";
    label_duedate.innerHTML = "Due date";
    label_priority.innerHTML = "Priority";
    label_actions.innerHTML = "Actions";

    labels.appendChild(label_name);
    labels.appendChild(label_duedate);
    labels.appendChild(label_priority);
    labels.appendChild(label_actions);

    todoview.appendChild(labels);
    let todos = undefined;
    if(filter == "Today") {
        todos = getTodayTodos(projects);
        
    }
    else if(filter == "Upcoming") {
        todos = getUpcomingTodos(projects);
    }
    else if(filter == "HighPriority") {
        todos = getHighPriorityTodos(projects);
    }
    else if(filter == "Project") {
        todos = projects[0].getTodos();
    }

    const todobox = document.createElement('div');
    todobox.setAttribute("id","todobox");
    todos.forEach(todo => {
        const todo_item = document.createElement('div');

        todo_item.classList.add("todo-item");
        if(todo.completed) {
            todo_item.classList.add("completed");
        }

        todo_item.addEventListener("click",(e)=>{
            if(e.target == e.currentTarget) {
                toggleTodoDescription(todo_item);
            }
        });

        const tName = document.createElement('div');
        const tDueDate = document.createElement('div');
        const tPriority = document.createElement('div');
        const tActions = document.createElement('div');
        const tDesc = document.createElement('div');
        const tProject = document.createElement('div');

        tName.classList.add("todo-name");
        tDueDate.classList.add("todo-duedate");
        tPriority.classList.add("todo-priority");
        tActions.classList.add("todo-actions");
        tDesc.classList.add("todo-description");
        tDesc.classList.add("hidden");
        tProject.classList.add("todo-project");
        
        tName.innerHTML = todo.name;
        tDueDate.innerHTML = format(todo.dueDate, 'dd.MM.yyyy');
        tPriority.innerHTML = todo.priority;
        tDesc.innerHTML = todo.description;
        tProject.innerHTML = todo.projectName;

        const tCheckbox = document.createElement('button');
        const tDelete = document.createElement('button');

        tCheckbox.classList.add("todo-button");
        tDelete.classList.add("todo-button");

        tCheckbox.classList.add("icon-checkbox");
        tDelete.classList.add("icon-delete");

        tCheckbox.addEventListener("click",(e)=>{
            completeTodo(todo);
            updatePage(projects);
        });

        tDelete.addEventListener("click",(e)=>{
            
            todoRemover(todo,projects);
            updatePage(projects);
        });

        tActions.appendChild(tCheckbox);
        tActions.appendChild(tDelete);


        todo_item.appendChild(tName);
        todo_item.appendChild(tDueDate);
        todo_item.appendChild(tPriority);
        todo_item.appendChild(tActions);
        todo_item.appendChild(tDesc);
        todo_item.appendChild(tProject);

        todobox.appendChild(todo_item);
    });
    todoview.appendChild(todobox);
}

const updatePage = (projects) => {
    if(getCurrentTab().id == "sidebar-today"){
        buildTodoview(projects, "Today");
    }
    else if(getCurrentTab().id == "sidebar-upcoming"){
        buildTodoview(projects, "Upcoming");
    }
    else if(getCurrentTab().id == "sidebar-highpriority"){
        buildTodoview(projects, "HighPriority");
    }
    else if(getCurrentTab().id.includes("sidebar-project-")){
        for(let i = 0; i < projects.length; i++) {
            if(projects[i].name == getCurrentTab().querySelector(".sidebar-text").innerHTML){
                buildTodoview([projects[i]], "Project");
                break;
            }
        }
    }
}


export { buildTodoview, updatePage };