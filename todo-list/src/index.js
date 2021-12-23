import "./styles.css";
import * as _ from "date-fns";
import { todo } from "./todo";
import { addTodo,
    getTodo,
    deleteTodo,
    addProject,
    getProject,
    deleteProject,
    clearLocalStorage } from "./localStorage";

// document.addEventListener("DOMContentLoaded", function() {})

let task1 = todo("task one", "some description !!!", new Date(2021, 11, 26));
let task2 = todo("task two", "some description xxx", new Date(2022, 0, 6), 3);
let task3 = todo("task three", "some description yyy", new Date(2022, 6, 12), 2);


localStorage.forEach(item => JSON.parse(console.log(item)));
