import "./main.css";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

function init() {
    let wrapper = document.createElement("div");
    wrapper.classList.add("o-wrap",);

    let content = document.createElement("div");
    content.id = "content";

    let header = document.createElement("header");
    let nav = document.createElement("nav");
    nav.classList.add("c-nav");

    for(let i = 0; i < 3; i++) {
        let navItem = document.createElement("div");
        navItem.classList.add("c-nav__item");

        switch(i) {
            case 0:
                navItem.innerHTML = "Home";
                navItem.addEventListener("click", () => {
                    removeAllChildNodes(content);
                    home(content);
                });
                break;
            case 1:
                navItem.innerHTML = "Menu";
                navItem.addEventListener("click", () => {
                    removeAllChildNodes(content);
                    menu(content);
                });
                break;
            case 2:
                navItem.innerHTML = "Contact";
                navItem.addEventListener("click", () => {
                    removeAllChildNodes(content);
                    contact(content);
                });
                break;
        }
        nav.appendChild(navItem);
    }
    header.appendChild(nav);

    let children = [header, content];
    children.map(child => wrapper.appendChild(child));

    return wrapper;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(init());
    home(document.querySelector("#content"));
});