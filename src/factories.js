import { startOfTomorrow, compareAsc, isToday } from 'date-fns';


const todoFactory = (name, description, dueDate, priority) => {
    return { name, description, dueDate, priority};
}

const projectFactory = (name) => {
    let todos = [];
    const addTodo = (todo) => {
        todos.push(todo);
    }
    const removeTodo = (todo) => {
        for(let i = 0; i < todos.length; i++) {
            if(todos[i] == todo) {
                todos.splice(i,1);
            }
        }
    }
    const getTodos = () => {
        const todosCopy = todos;
        return todosCopy;
    }   
    return { name, addTodo, removeTodo, getTodos };
}

const getTodayTodos = (projects) => {
    let todaysTodos = [];
    for(let i = 0; i < projects.length; i++) {
        const todos = projects[i].getTodos();
        for(let j = 0; j < todos.length; j++){
            if(isToday(todos[j].dueDate)){
                todaysTodos.push(todos[j]);
            }
        }
    }
    return todaysTodos;
}
const getUpcomingTodos = (projects) => {
    let upcomingTodos = [];
    for(let i = 0; i < projects.length; i++) {
        const todos = projects[i].getTodos();
        for(let j = 0; j < todos.length; j++){
            if(compareAsc(startOfTomorrow(),todos[j].dueDate) <= 0){
                upcomingTodos.push(todos[j]);
            }
        }
    }
    return upcomingTodos;
}
const getHighPriorityTodos = (projects) => {
    let highPriorityTodos = [];
    for(let i = 0; i < projects.length; i++) {
        const todos = projects[i].getTodos();
        for(let j = 0; j < todos.length; j++){
            if(todos[j].priority == "High"){
                highPriorityTodos.push(todos[j]);
            }
        }
    }
    return highPriorityTodos;
}

export { todoFactory, projectFactory, getTodayTodos, getUpcomingTodos, getHighPriorityTodos }