const myLibrary = [];

class Book {
  constructor(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info() {
    console.log(
      `${this.id} ${this.title} by ${this.author}, ${this.pages} pages, not read yet`,
    );
  }
}

function addBook() {
  let id = crypto.randomUUID();
  const titleInput = document.getElementById("title_input").value;
  const authorInput = document.getElementById("author_input").value;
  const pagesInput = document.getElementById("pages_input").value;
  const readInput = document.getElementById("read_input").checked;

  const newBook = new Book(id, titleInput, authorInput, pagesInput, readInput);
  myLibrary.push(newBook);
  newBook.info();
  displayBook();
}

function displayBook() {
  cardContainer.replaceChildren();
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.dataset.id = book.id;
    card.classList.add("card");
    cardContainer.appendChild(card);

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = book.title;
    card.appendChild(title);

    const underLine = document.createElement("hr");
    card.appendChild(underLine);

    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent = "Author: " + book.author;
    card.appendChild(author);

    const pages = document.createElement("p");
    pages.classList.add("pages");
    pages.textContent = "Pages: " + book.pages;
    card.appendChild(pages);

    const read = document.createElement("p");
    read.classList.add("read");
    if (book.read === true) {
      var status = "Yes";
      var readBtn = "green-button";
    } else {
      var status = "Not yet";
      var readBtn = "yellow-button";
    }
    read.textContent = "Read: " + status;
    card.appendChild(read);

    const underLine2 = underLine.cloneNode(true);
    card.appendChild(underLine2);

    const cardButton = document.createElement("div");
    cardButton.classList.add("card-buttons");
    card.appendChild(cardButton);

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", deletedBook);
    cardButton.appendChild(removeButton);

    const readButton = document.createElement("button");
    readButton.classList.add("read-check", readBtn);
    readButton.textContent = "Mark as Read";
    readButton.addEventListener("click", markAsRead);
    cardButton.appendChild(readButton);
  });
}
function deletedBook() {
  console.log(`In deletedBook function ${this}`);
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
  let cardId = this.parentNode.parentNode.getAttribute("data-id");
  myLibrary.splice(
    myLibrary.findIndex((book) => book.id === cardId),
    1,
  );
  displayBook();
}

function markAsRead() {
  console.log(`In markAsRead function ${this}`);
  let cardId = this.parentNode.parentNode.getAttribute("data-id");
  const book = myLibrary[myLibrary.findIndex((book) => book.id === cardId)];
  book.read = !book.read;
  displayBook();
}

const cardContainer = document.querySelector(".card-container");

const openButton = document.querySelector("#add-btn");
const closeButton = document.querySelector(".close-dialog");
const saveButton = document.querySelector(".save-book");
const deleteButton = document.querySelectorAll(".remove");
const addBookDialog = document.querySelector("#add-dialog");

deleteButton.forEach((button) => {
  button.addEventListener("click", deletedBook);
});
saveButton.addEventListener("click", addBook);
openButton.addEventListener("click", () => {
  addBookDialog.showModal();
});
closeButton.addEventListener("click", () => {
  addBookDialog.close();
});
