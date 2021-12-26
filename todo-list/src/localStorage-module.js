import { todo } from "./todo-module";

const _todoObj = todo;

function initEvents() {
    _submitBtn();
    _clearBtn();
}

function _submitBtn() {
    const form = document.querySelector(".c-form");
    const project = document.querySelector("#project");
    const todo = document.querySelector("#todo");
    const desc = document.querySelector("#desc");
    const date = document.querySelector("#date");
    const priority = document.querySelector("#priority");

    form.addEventListener("submit", function() {
        let item = { key:project.value, value:_todoObj(project.value, todo.value, desc.value, date.value, priority.value) };
        _addTodo(item);
        project.value = "";
        todo.value = "";
        desc.value = "";
    });
}

function _clearBtn() {
    const btn = document.querySelector(".c-list__btn");
    btn.addEventListener("click", _clearLocalStorage);
}

function _addTodo(item) {
    localStorage.setItem(item.key, JSON.stringify(item.value));
}

function addProject(project) {
    JSON.stringify(localStorage.setItem(project, []));
}

function loadLocalStorage() {
    let projects = [];

    if(localStorage.length !== 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (!localStorage.hasOwnProperty(key)) {
                continue; // skip keys like "setItem", "getItem" etc
            }
            projects.push({key : key, value : JSON.parse(localStorage.getItem(key))});
        }
    }
    return projects;
}

function deleteTodo(todo) {

}



function getProject(project) {

}

function deleteProject(project) {

}

function _clearLocalStorage() {
    localStorage.clear();
}

export { initEvents, loadLocalStorage }