let libArray = [];

const bookTitleInput = document.querySelector("#bookTitle");
const bookAuthorInput = document.querySelector("#bookAuthor");
const bookPagesInput = document.querySelector("#bookPages");

const addBookModal = document.querySelector(".addBook");
const booksContainer = document.querySelector("#books");

const newBookBtn = document.querySelector(".newBookBtn");
newBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookModal.style.display =
    addBookModal.style.display === "flex" ? "none" : "flex";
});

const addBookBtn = document.querySelector(".addBookBtn");
addBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBook(
    createId(),
    bookTitleInput.value,
    bookAuthorInput.value,
    bookPagesInput.value
  );
  bookTitleInput.value = "";
  bookAuthorInput.value = "";
  bookPagesInput.value = "";
  updateLibrary();
  addBookModal.style.display =
    addBookModal.style.display === "flex" ? "none" : "flex";
});

const closeModalBtn = document.querySelector(".closeModalBtn");
closeModalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookModal.style.display =
    addBookModal.style.display === "flex" ? "none" : "flex";
});

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

function Book(id, title, author, pages, read = false) {
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
  if (!title || !author || !pages) return;
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

function clearLibrary() {
  booksContainer.replaceChildren();
}

function updateLibrary() {
  clearLibrary();
  if (libArray.length > 0) {
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

      // const bookReadDiv = document.createElement("div");
      // bookReadDiv.className = "read";
      // bookReadDiv.textContent = book.read;

      const bookIdDiv = document.createElement("div");
      bookIdDiv.className = "id";
      bookIdDiv.textContent = `id : ${book.id}`;

      const buttonsDiv = document.createElement("div");
      buttonsDiv.className = "actions";

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "deleteBtn";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        deleteBook(book.id);
      });

      const updateBtn = document.createElement("button");
      updateBtn.className = "updateBtn";
      updateBtn.textContent = "Completed";
      updateBtn.style.backgroundColor = book.read
        ? "rgb(37, 182, 37)"
        : "rgb(136, 136, 140)";
      updateBtn.addEventListener("click", () => {
        book.updateReadStatus();
        updateLibrary();
      });

      buttonsDiv.appendChild(deleteBtn);
      buttonsDiv.appendChild(updateBtn);

      bookDiv.appendChild(bookTitleDiv);
      bookDiv.appendChild(bookAuthorDiv);
      bookDiv.appendChild(bookPagesDiv);
      // bookDiv.appendChild(bookReadDiv);
      bookDiv.appendChild(bookIdDiv);
      bookDiv.appendChild(buttonsDiv);

      booksContainer.appendChild(bookDiv);
    }
  } else {
    const noBooks = document.createElement("div");
    noBooks.textContent = "THERE IS NO BOOKS. READ SOME!!!";
    booksContainer.appendChild(noBooks);
  }
}

updateLibrary();
