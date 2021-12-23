function addTodo(todo) {
    JSON.stringify(localStorage.setItem(todo.getProject(), todo));
}

function getTodo(todo) {
    if(localStorage === undefined || localStorage.length === 0) {
        console.error("Local Storage is empty");
    } else {
        JSON.parse(localStorage.getItem(todo.getProject()[todo]));
    }
}

function deleteTodo(todo) {
    localStorage.removeItem(project[todo]);
}

function addProject(project) {
    JSON.stringify(localStorage.setItem(project, []));
}

function getProject(project) {
    if(localStorage === undefined || localStorage.length === 0) {
        console.error("Local Storage is empty");
    } else {
        JSON.parse(localStorage.getItem(project));
    }
}

function deleteProject(project) {
    localStorage.removeItem(project);
}

function clearLocalStorage() {
    localStorage.clear();
}

export { addTodo,
    getTodo,
    deleteTodo,
    addProject,
    getProject,
    deleteProject,
    clearLocalStorage }