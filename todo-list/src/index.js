import "./styles.css";
import * as _ from "date-fns";
import { initDOM } from "./template-module";
import { initEvents } from "./localStorage-module";
//import { todo } from "./todo-module";

// console.log(todo("xxx", "aaa", "gweg", "2121.3.1", "low"));

document.addEventListener("DOMContentLoaded", function() {
    initDOM();
    initEvents();
});

console.log(JSON.parse(localStorage.getItem("xxx")));
