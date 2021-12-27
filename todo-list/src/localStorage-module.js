import { todo } from "./todo-module";

const _todoObj = todo;

function initEvents() {
    _addBtn();
    _submitBtn();
    _clearBtn();
    _deleteBtn();
    _editBtn();
}

function _addBtn() {
    const btn = document.querySelector(".c-addBtn");
    btn.addEventListener("click", _activateForm);
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
        location.reload();
    });
}

function _clearBtn() {
    const btn = document.querySelector(".c-list__btn");
    btn.addEventListener("click", function() {
        _clearLocalStorage();
        location.reload();
    }); 
}

function _deleteBtn() {
    const btn = document.querySelectorAll(".c-list__item__todo__deleteBtn");
    btn.forEach(el => el.addEventListener("click", function(e){
        _deleteTodo(e);
        location.reload();
    }));
}

function _editBtn() {
    const btn = document.querySelectorAll(".c-list__item__todo__editBtn");
    btn.forEach(el => el.addEventListener("click", function(e) {
        _editTodo(e);
        location.reload();
    }));
}

function _activateForm() {
    const form = document.querySelector(".c-form");
    const body = document.querySelector("body");
    body.classList.add("isBlurred");
    form.classList.add("isActive");
}

function _addTodo(item) {
    for(let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) === item.key){
            let todos = JSON.parse(localStorage.getItem(item.key));
            todos.push(item.value);
            localStorage.setItem(item.key, JSON.stringify(todos));
            return;
        }
    }
    localStorage.setItem(item.key, JSON.stringify(new Array(item.value)));
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

function _deleteTodo(e) {
    let project = e.target.dataset.project;
    let todos = JSON.parse(localStorage.getItem(project));
    let currentTodos = todos.filter(el => el.todo !== e.target.dataset.todo);
    if(currentTodos.length === 0) {
        localStorage.removeItem(project);
    } else {
        localStorage.setItem(project, JSON.stringify(currentTodos));
    }
}

function _editTodo() {

}

function getProject(project) {

}

function deleteProject(project) {

}

function _clearLocalStorage() {
    localStorage.clear();
}

export { initEvents, loadLocalStorage }