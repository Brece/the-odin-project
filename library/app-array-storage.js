const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");
const submit = document.querySelector("#submit");
const library = document.querySelector(".c-library");


let myLibrary = [];

submit.addEventListener("click", function(e) {
    e.preventDefault();
    if(title.value && author.value && pages.value) {
        addBookToLibrary();
        title.value = "";
        author.value = "";
        pages.value = "";
    }
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.isRead = function() {
    this.read === "true" ? this.read = "false" : this.read = "true";
}

function addBookToLibrary() {
    let book = new Book(title.value, author.value, pages.value, isRead.value);
    book.prototype = Object.create(Book.prototype);
    myLibrary.push(book);
    showDisplay();
}

function showDisplay() {
    removeDisplay();

    for (let i = 0; i < myLibrary.length; i++){
        let item = document.createElement("div");
        item.classList.add("c-library__item");
        item.setAttribute("data-index", i);
        item.innerHTML = `<p>Title: ${myLibrary[i].title}</p>
            <p>Author: ${myLibrary[i].author}</p>
            <p>Pages: ${myLibrary[i].pages}</p>
            <button type="button" class="c-library__item__delete-btn">Delete</button>
            <button type="button" class="c-library__item__read-btn${myLibrary[i].read === "true" ? " is-read" : ""}">Read</button>`;

        library.appendChild(item);

        console.log(myLibrary[i].read);
    }

    deleteBtnListener();
    readToggle();

    //
    console.log(myLibrary);
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
            let bookIndex = bookItem.dataset.index;
            bookItem.parentNode.removeChild(bookItem);
            updateLibrary(bookIndex);

            //
            console.log(myLibrary);

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

            //
            console.log(myLibrary);
        });
    }
}

function updateLibrary(index) {
        myLibrary.splice(index, 1)
        showDisplay();
}