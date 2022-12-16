const toggleSidebar = () => {
    const sidebar =  document.getElementById("sidebar");
    const content = document.getElementById("content");
    if (content.classList.contains("hide-sidebar")){
        content.classList.remove("hide-sidebar");
        sidebar.classList.remove("hidden");
    }
    else {
        content.classList.add("hide-sidebar");
        sidebar.classList.add("hidden");
        sidebar.style.transition = "0.25s";
        content.style.transition = "0.25s";
    }

}

const toggleTodoDescription = (todo_item) => {
    const desc = todo_item.getElementsByClassName("todo-description")[0];
    if (desc.classList.contains("hidden")){
        desc.classList.remove("hidden");
        
    } else {
        desc.classList.add("hidden");
    }
}

const toggleSidebarCategory = (e) => {
    if (e.classList.contains("hidden")){
        e.classList.remove("hidden");
        
    } else {
        e.classList.add("hidden");
    }
}

export { toggleSidebar, toggleTodoDescription, toggleSidebarCategory };