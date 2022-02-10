// class Book {
//   constructor(title, author, pages) {
//     this.id = this.createId();
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = false;
//   }

//   updateReadStatus() {
//     this.read = !this.read;
//   }

//   createId() {
//     const chars = [
//       "a",
//       "b",
//       "c",
//       "1",
//       "2",
//       "3",
//       "4",
//       "5",
//       "6",
//       "7",
//       "8",
//       "9",
//       "0",
//     ];
//     let id = "";

//     for (let i = 0; i < 5; i++) {
//       id += chars[Math.floor(Math.random() * chars.length)];
//     }
//     return id;
//   }
// }

// class Library {
//   constructor() {
//     this.books = [];
//   }

//   addBook(value) {
//     if (!value) return;
//     this.books.push(value);
//   }

//   removeBook(bookId) {
//     let index = null;
//     for (let book of this.books) {
//       if (book.id === bookId) {
//         index = this.books.indexOf(book);
//         break;
//       }
//     }
//     this.books.splice(index, 1);
//   }

//   removeAllBooks() {
//     this.books = [];
//   }

//   getBook(book) {
//     return this.books[this.books.indexOf(book)];
//   }

//   getBooks() {
//     return this.books;
//   }
// }

// class DisplayController {
//   constructor() {}

//   updateDisplay(books) {
//     this.clearDisplay(booksContainer);
//     if (books.length > 0) {
//       for (let book of books) {
//         const bookDiv = document.createElement("div");
//         bookDiv.className = "book";

//         const bookTitleDiv = document.createElement("div");
//         bookTitleDiv.className = "title";
//         bookTitleDiv.textContent = book.title;

//         const bookAuthorDiv = document.createElement("div");
//         bookAuthorDiv.className = "author";
//         bookAuthorDiv.textContent = book.author;

//         const bookPagesDiv = document.createElement("div");
//         bookPagesDiv.className = "pages";
//         bookPagesDiv.textContent = book.pages;

//         // const bookReadDiv = document.createElement("div");
//         // bookReadDiv.className = "read";
//         // bookReadDiv.textContent = book.read;

//         const bookIdDiv = document.createElement("div");
//         bookIdDiv.className = "id";
//         bookIdDiv.textContent = `id : ${book.id}`;

//         const buttonsDiv = document.createElement("div");
//         buttonsDiv.className = "actions";

//         const deleteBtn = document.createElement("button");
//         deleteBtn.className = "deleteBtn";
//         deleteBtn.textContent = "Delete";
//         deleteBtn.addEventListener("click", () => {
//           library.removeBook(book.id);
//           this.updateDisplay(library.getBooks());
//         });

//         const updateBtn = document.createElement("button");
//         updateBtn.className = "updateBtn";
//         updateBtn.textContent = "Completed";
//         updateBtn.style.backgroundColor = book.read
//           ? "rgb(37, 182, 37)"
//           : "rgb(136, 136, 140)";
//         updateBtn.addEventListener("click", () => {
//           book.updateReadStatus();
//           this.updateDisplay(library.getBooks());
//         });

//         buttonsDiv.appendChild(deleteBtn);
//         buttonsDiv.appendChild(updateBtn);

//         bookDiv.appendChild(bookTitleDiv);
//         bookDiv.appendChild(bookAuthorDiv);
//         bookDiv.appendChild(bookPagesDiv);
//         // bookDiv.appendChild(bookReadDiv);
//         bookDiv.appendChild(bookIdDiv);
//         bookDiv.appendChild(buttonsDiv);

//         booksContainer.appendChild(bookDiv);
//       }
//     } else {
//       const noBooks = document.createElement("div");
//       noBooks.textContent = "THERE IS NO BOOKS. READ SOME!!!";
//       booksContainer.appendChild(noBooks);
//     }
//   }

//   clearDisplay(display) {
//     display.replaceChildren();
//   }
// }
// const booksContainer = document.querySelector("#books");
// const bookTitleInput = document.querySelector("#bookTitle");
// const bookAuthorInput = document.querySelector("#bookAuthor");
// const bookPagesInput = document.querySelector("#bookPages");
// const addBookModal = document.querySelector(".addBook");
// const addBookBtn = document.querySelector(".addBookBtn");
// addBookBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   if(!bookTitleInput.value) return
//   library.addBook(
//     new Book(bookTitleInput.value, bookAuthorInput.value, bookPagesInput.value)
//   );
//   displayController.updateDisplay(library.getBooks());
// });

// const newBookBtn = document.querySelector(".newBookBtn");
// newBookBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   addBookModal.style.display =
//     addBookModal.style.display === "flex" ? "none" : "flex";
// });
// const closeModalBtn = document.querySelector(".closeModalBtn");
// closeModalBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   addBookModal.style.display =
//     addBookModal.style.display === "flex" ? "none" : "flex";
// });

// const library = new Library();
// const displayController = new DisplayController();
// displayController.updateDisplay(library.getBooks());
