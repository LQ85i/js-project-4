import './styles.css'

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./icons/', false, /\.(png|jpe?g|svg)$/));

const todoFactory = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
};

const projectFactory = (title, description, dueDate, priority) => {
    const todos = [];
    const addTodo = todo => todos.push(todo);
    const getTodos = () => todos;

    return { title, description, dueDate, priority, addTodo, getTodos };
};

function defaultSetup() {
    const project0 = projectFactory("project0","desc","due","prio");
    const todo0 = todoFactory("todo0","desc","due","prio");
    project0.addTodo(todo0);
}

defaultSetup();