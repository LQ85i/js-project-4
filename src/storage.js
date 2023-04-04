import { parseISO } from "date-fns";
import { projectFactory } from "./factories";

const saveTodo = (todo) => {
    let IDcounter = localStorage.getItem("IDcounter");
    if(IDcounter == null){
        localStorage.setItem("IDcounter",0);
        IDcounter = 0;
    }
    let todoIDs = localStorage.getItem("todoIDs");
    if (todoIDs == null) {
        todoIDs = [];
    } 
    else {
        todoIDs = todoIDs.split(',');
    }
    const newID = ++IDcounter;
    todo.id = newID;
    localStorage.setItem("IDcounter",IDcounter);

    todoIDs.push(newID);
    localStorage.setItem("todoIDs",todoIDs);

    const myTodo = {
        name: todo.name, 
        description: todo.description, 
        dueDate: todo.dueDate, 
        priority: todo.priority, 
        projectName: todo.projectName, 
        completed: todo.completed,
        id: todo.id
    }
    localStorage.setItem("todo"+newID,JSON.stringify(myTodo));
}

const saveProject = (project) => {
    let IDcounter = localStorage.getItem("IDcounter");
    if(IDcounter == null){
        localStorage.setItem("IDcounter",0);
        IDcounter = 0;
    }
    let projectIDs = localStorage.getItem("projectIDs");
    if (projectIDs == null) {
        projectIDs = [];
    } 
    else {
        projectIDs = projectIDs.split(',');
    }
    const newID = ++IDcounter;
    project.id = newID;
    localStorage.setItem("IDcounter",IDcounter);

    projectIDs.push(newID);
    localStorage.setItem("projectIDs",projectIDs);

    const projectName = project.name;
    localStorage.setItem("project"+newID,projectName)
}

const loadProjects = () => {
    let projects = [];

    let projectIDs = localStorage.getItem("projectIDs");
    let todoIDs = localStorage.getItem("todoIDs");

    if (projectIDs == null) {
        return -1;
    }
    else {
        projectIDs = projectIDs.split(',');
    }
    if (todoIDs != null) {
        todoIDs = todoIDs.split(',');
    }
    for (let i = 0; i < projectIDs.length; i++) {
        const projectID = projectIDs[i];
        const projectName = localStorage.getItem("project"+projectID);        
        let project = projectFactory(projectName);
        project.id = projectID;
        if(todoIDs != null){
            for (let j = 0; j < todoIDs.length; j++) {
                const todoID = todoIDs[j];
                const todo = localStorage.getObj("todo"+todoID);
                todo.dueDate = parseISO(todo.dueDate);
                if(todo.projectName == projectName) {
                    todo.id = todoID;
                    project.addTodo(todo);
                }
            }
        }
        projects.push(project);
    }

    return projects;
}

const removeLocalProject = (project) => {
    const projectID = project.id;
    const projectName = project.name;
    let todoIDs = localStorage.getItem("todoIDs");
    let projectIDs = localStorage.getItem("projectIDs");
    projectIDs = projectIDs.split(',');
    let todoIDsToDelete = [];
    if (todoIDs != null) {
        todoIDs = todoIDs.split(',');
        for (let i = 0; i < todoIDs.length; i++) {
            const todoID = todoIDs[i];
            const todo = localStorage.getObj("todo"+todoID);
            if(projectName == todo.projectName){
                todoIDsToDelete.push(todoID);
            }
        }    
        for (let i = 0; i < todoIDsToDelete.length; i++) {
            const todoID = todoIDsToDelete[i];
            todoIDs.splice(todoIDs.indexOf(todoID),1);
            if(todoIDs.length == 0){
                localStorage.removeItem("todoIDs");
            }
            else {
                localStorage.setItem("todoIDs",todoIDs);
            }
            localStorage.removeItem("todo"+todoID);
        }
    }
    
    projectIDs.splice(projectIDs.indexOf(projectID),1);
    if(projectIDs.length == 0){
        localStorage.removeItem("projectIDs");
    }
    else {
        localStorage.setItem("projectIDs",projectIDs);
    }
    localStorage.removeItem("project"+projectID);
}

const removeLocalTodo = (todo) => {
    const todoID = todo.id.toString();
    let todoIDs = localStorage.getItem("todoIDs");
    todoIDs = todoIDs.split(',');
    todoIDs.splice(todoIDs.indexOf(todoID),1);
    if(todoIDs.length == 0){
        localStorage.removeItem("todoIDs");
    }
    else {
        localStorage.setItem("todoIDs",todoIDs);
    }
    localStorage.removeItem("todo"+todoID);
}

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

export { saveTodo, saveProject, loadProjects, removeLocalProject, removeLocalTodo }