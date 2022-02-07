let libArray = [];

const addBtn = document.querySelector(".addBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const updateBtn = document.querySelector(".updateBtn");
const booksContainer = document.querySelector("#books");

function createId() {
  const chars = [
    "a",
    "b",
    "c",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];
  let id = "";

  for (let i = 0; i < 5; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

function Book(id, title, author, pages, read) {
  (this.id = id),
    (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

Book.prototype.updateReadStatus = function () {
  this.read = this.read ? false : true;
};

function addBook(id, title, author, pages, read) {
  const book = new Book(id, title, author, pages, read);
  libArray.push(book);
}

function deleteBook(id) {
  let index = null;
  for (let book of libArray) {
    if (book.id === id) {
      index = libArray.indexOf(book);
    }
  }
  libArray.splice(index, 1);
  updateLibrary();
}

addBook(createId(), "keko", "kekocan", 21, false);
addBook(createId(), "maho", "mahoaga", 121, true);
addBook(createId(), "Sekesen günde devri alem", "emir", 356, false);

function clearLibrary() {
  booksContainer.replaceChildren();
}

function updateLibrary() {
  clearLibrary();

  for (let book of libArray) {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";

    const bookTitleDiv = document.createElement("div");
    bookTitleDiv.className = "title";
    bookTitleDiv.textContent = book.title;

    const bookAuthorDiv = document.createElement("div");
    bookAuthorDiv.className = "author";
    bookAuthorDiv.textContent = book.author;

    const bookPagesDiv = document.createElement("div");
    bookPagesDiv.className = "pages";
    bookPagesDiv.textContent = book.pages;

    const bookReadDiv = document.createElement("div");
    bookReadDiv.className = "read";
    bookReadDiv.textContent = book.read;

    const bookIdDiv = document.createElement("div");
    bookIdDiv.className = "id";
    bookIdDiv.textContent = book.id;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "actions";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = "Delete Book";
    deleteBtn.addEventListener("click", () => {
      deleteBook(book.id);
    });

    const updateBtn = document.createElement("button");
    updateBtn.className = "updateBtn";
    updateBtn.textContent = "Completed";

    buttonsDiv.appendChild(deleteBtn);
    buttonsDiv.appendChild(updateBtn);

    bookDiv.appendChild(bookTitleDiv);
    bookDiv.appendChild(bookAuthorDiv);
    bookDiv.appendChild(bookPagesDiv);
    bookDiv.appendChild(bookReadDiv);
    bookDiv.appendChild(bookIdDiv);
    bookDiv.appendChild(buttonsDiv);

    booksContainer.appendChild(bookDiv);
  }
}

updateLibrary();
