const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");
const submit = document.querySelector("#submit");
const library = document.querySelector(".c-library");


/* unique ID
let bookId = new Date().getTime();
*/

let myLibrary = [];

document.addEventListener("DOMContentLoaded", showDisplay);

submit.addEventListener("click", function(e) {
    e.preventDefault();
    if(title.value && author.value && pages.value) {
        addBookToLibrary();
        title.value = "";
        author.value = "";
        pages.value = "";
    }
});

class Book {
    constructor(title, author, pages, read, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = id;
    }
}

function addBookToLibrary() {
    let bookId = new Date().getTime();
    let book = new Book(title.value, author.value, pages.value, isRead.value, bookId);

    localStorage.setItem(bookId, JSON.stringify(book));
    showDisplay();
}

function showDisplay() {
    removeDisplay();
    myLibrary = [];

    for (let i = 0; i < localStorage.length; i++) {
        let book = JSON.parse(localStorage.getItem(Object.keys(localStorage)[i]));

        book.isRead = function() {
            this.read === "true" ? this.read = "false" : this.read = "true";
        }

        myLibrary.push(book);

        let item = document.createElement("div");
        item.classList.add("c-library__item");
        item.setAttribute("data-index", i);
        item.setAttribute("data-id", book.id);
        item.innerHTML = `<p>Title: ${book.title}</p>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <button type="button" class="c-library__item__delete-btn">Delete</button>
            <button type="button" class="c-library__item__read-btn${book.read === "true" ? " is-read" : ""}">Read</button>`;

        library.appendChild(item);
    }

    deleteBtnListener();
    readToggle();
}

function removeDisplay() {
    while (library.hasChildNodes()) {
        library.removeChild(library.firstChild);
    }
}

function deleteBtnListener() {
    let deleteBtns = document.querySelectorAll(".c-library__item__delete-btn");

    for(let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener("click", function(e) {
            e.preventDefault();
            let bookItem = e.target.parentNode;
            let bookId = bookItem.dataset.id;
            bookItem.parentNode.removeChild(bookItem);
            updateStorage(bookId);
        });
    }
}

function readToggle() {
    let readBtns = document.querySelectorAll(".c-library__item__read-btn");

    for(let i = 0; i < readBtns.length; i++) {
        readBtns[i].addEventListener("click", function(e) {
            e.preventDefault();
            let bookItem = e.target.parentNode;
            let bookIndex = bookItem.dataset.index;
            e.target.classList.toggle("is-read");
            myLibrary[bookIndex].isRead();
            localStorage[bookItem.dataset.id] = JSON.stringify(myLibrary[bookIndex]);
        });
    }
}

function updateStorage(id) {
    localStorage.removeItem(id);
    showDisplay();
}