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

export { toggleSidebar };