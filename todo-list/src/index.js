import "./styles.css";
import * as _ from "date-fns";
import { initDOM, initProjects } from "./template-module";
import { initEvents, loadLocalStorage } from "./localStorage-module";
//import { todo } from "./todo-module";


document.addEventListener("DOMContentLoaded", function() {
    let projects = loadLocalStorage();
    initDOM();
    initProjects(projects);
    initEvents();
});
