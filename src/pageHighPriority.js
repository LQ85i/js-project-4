const createPageHighPriority = (todos) => {

    const mainview = document.getElementById("mainview");
    mainview.innerHTML = "";

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


    mainview.appendChild(labels);

    //loop for going through todos and finding right tasks

    //default todo
    const todo_item = document.createElement('div');

    todo_item.classList.add("todo-item");

    const todo_name = document.createElement('div');
    const todo_duedate = document.createElement('div');
    const todo_priority = document.createElement('div');
    const todo_actions = document.createElement('div');

    todo_name.classList.add("todo-name");
    todo_duedate.classList.add("todo-duedate");
    todo_priority.classList.add("todo-priority");
    todo_actions.classList.add("todo-actions");
    
    todo_name.innerHTML = "high priority todo";
    todo_duedate.innerHTML = "12.12.1212 12:12";
    todo_priority.innerHTML = "High";

    const todo_edit = document.createElement('button');
    const todo_checkbox = document.createElement('button');
    const todo_delete = document.createElement('button');

    todo_edit.classList.add("todo-button");
    todo_checkbox.classList.add("todo-button");
    todo_delete.classList.add("todo-button");

    todo_edit.classList.add("icon-edit");
    todo_checkbox.classList.add("icon-checkbox");
    todo_delete.classList.add("icon-delete");

    todo_actions.appendChild(todo_edit);
    todo_actions.appendChild(todo_checkbox);
    todo_actions.appendChild(todo_delete);


    todo_item.appendChild(todo_name);
    todo_item.appendChild(todo_duedate);
    todo_item.appendChild(todo_priority);
    todo_item.appendChild(todo_actions);

    mainview.appendChild(todo_item);

}

export { createPageHighPriority };