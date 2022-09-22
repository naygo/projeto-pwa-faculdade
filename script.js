/* SEARCH SCRIPT */
// ARRAY OF BOOKS DIVS - it's initialized here but it's filled in showBooks() afeter the books are loaded
let booksDivs = [];

const searchBook = () => {
  let searchValue = document.getElementById("search").value;
  let foundABook = false;

  /* go through the book's divs and if it finds titles equivalent to the one typed, 
  it shows them and hides the others */
  for (var i = 0; i < booksDivs.length; i++) {
    const bookTitle = booksDivs[i].querySelector(".book-title h3").innerText;
    if (bookTitle.toLowerCase().includes(searchValue.toLowerCase())) {
      booksDivs[i].classList.remove("hidden");
      foundABook = true;
    } else {
      booksDivs[i].classList.add("hidden");
    }
  }

  if (!foundABook && books.length > 0) {
    // if there is no book, show message
    document.getElementById("no-found").classList.remove("hidden");
  } else {
    document.getElementById("no-found").classList.add("hidden");
  }
};

let typingTimer;
let typeInterval = 500;
let searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", () => {
  // when the user types in the search input
  clearTimeout(typingTimer);
  typingTimer = setTimeout(searchBook, typeInterval);
});
/* END SEARCH */

// VARIABLES //
let books = JSON.parse(localStorage.getItem("books")) || [];

const screenOne = document.querySelector("#screen-one");
const addBookButton = document.querySelector("#add-book");

const screenTwo = document.querySelector("#screen-two");
const confirmFormButton = document.querySelector("#confirm-form");
const cancelFormButton = document.querySelector("#cancel-form");

const screenThree = document.querySelector("#screen-three");
const confirmEditButton = document.querySelector("#confirm-edit-button");
const cancelEditButton = document.querySelector("#cancel-edit-button");
const deleteBookButton = document.querySelector("#delete-book-button");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

const titleEdit = document.querySelector("#edit-title");
const authorEdit = document.querySelector("#edit-author");
const pagesEdit = document.querySelector("#edit-pages");
let idBookEditing = null;

onload = () => {
  findBook();
  setButtonsListeners();
};

const findBook = () => {
  // FIND BOOK - IF THERE IS NO BOOK, SHOW MESSAGE
  if (books.length === 0) {
    document.querySelector("#empty-message").classList.remove("hidden");
    document.querySelector("#no-found").classList.add("hidden");
  } else {
    document.querySelector("#empty-message").classList.add("hidden");
    showBooks();
  }
};

const showBooks = () => {
  // FORMAT AND SHOW BOOKS IN HTML
  let html = "";
  books.forEach((book) => {
    html += `
      <div class="book">
        <div class="book-title" onclick=editBook(${book.id})>
          <h3>${book.title}</h3>
        </div>
        <div class="book-info">
          <span>
            <input 
              type="checkbox" 
              id="read" 
              data-id=${book.id} 
              onclick=checkReadBook(${book.id})
              ${book.read ? "checked" : ""}
            />
          </span>
          <span>
            <strong>Author: </strong>
            ${book.author}
          </span>
          <span>
            <strong>Pages: </strong>
            ${book.pages}
          </span>
        </div>
      </div>
    `;
  });
  document.querySelector("#books").innerHTML = html;
  booksDivs = document.querySelectorAll(".book");
};

const addBook = () => {
  // takes the values entered in the field and adds it to the books array
  books.push({
    id: Math.random().toString().substring(2, 9),
    title: title.value,
    author: author.value,
    pages: pages.value,
    read: false,
  });

  saveBooks();
  showScreenOne();
  clearForm();
};

const editBook = (id) => {
  // when the user clicks on the book, it shows the edit screen and fills the fields with the book's data
  showScreenTree();

  idBookEditing = id;
  const book = books.find((book) => book.id == id);

  titleEdit.value = book.title;
  authorEdit.value = book.author;
  pagesEdit.value = book.pages;
};

const confirmEditBook = () => {
  // when the user clicks on the confirm button, it updates the book's data
  const book = books.find((book) => book.id == idBookEditing);

  book.title = titleEdit.value;
  book.author = authorEdit.value;
  book.pages = pagesEdit.value;

  idBookEditing = null;
  saveBooks();
  showScreenOne();
};

const deleteBook = () => {
  // when the user clicks on the delete button, it remove the book from the array and saves it
  books = books.filter((book) => book.id != idBookEditing);
  idBookEditing = null;
  saveBooks();
  showScreenOne();
};

const checkReadBook = (id) => {
  // when the user clicks on the checkbox, it changes the read status of the book
  const book = books.find((book) => book.id == id);
  const inputCheckbox = document.querySelector(`#read[data-id="${id}"]`);

  book.read = inputCheckbox.checked;
  saveBooks();
};

const monitoringAddButton = (button) => {
  // if the user has not entered all the fields, button is disabled
  if (areAllFieldsValidated(button.id)) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "");
  }
};

const areAllFieldsValidated = (id) => {
  // verify if all fields are filled on add form and edit form
  if (id === "confirm-form") {
    return title.value.length && author.value.length && pages.value.length;
  }

  if (id === "confirm-edit-button") {
    return (
      titleEdit.value.length &&
      authorEdit.value.length &&
      pagesEdit.value.length
    );
  }
};

const showScreenOne = () => {
  // show screen one and hide the others
  screenOne.classList.remove("hidden");
  screenTwo.classList.add("hidden");
  screenThree.classList.add("hidden");
  findBook();
  showBooks();
};

const showScreeTwo = () => {
  // show screen two and hide the others
  screenOne.classList.add("hidden");
  screenTwo.classList.remove("hidden");
  setInputsScreenTwoListeners();
  title.focus();
};

const showScreenTree = () => {
  // show screen three and hide the others
  screenOne.classList.add("hidden");
  screenThree.classList.remove("hidden");
  setInputsScreenThreeListeners();
  titleEdit.focus();
};

const clearForm = () => {
  // clear all fields of the add form
  author.value = "";
  pages.value = "";
  title.value = "";
};

const setInputsScreenTwoListeners = () => {
  // set listeners to inputs of screen two to monitoring if all fields are filled
  title.addEventListener("input", () => monitoringAddButton(confirmFormButton));
  author.addEventListener("input", () =>
    monitoringAddButton(confirmFormButton)
  );
  pages.addEventListener("input", () => monitoringAddButton(confirmFormButton));
};

const setInputsScreenThreeListeners = () => {
  // set listeners to inputs of screen three to monitoring if all fields are filled
  titleEdit.addEventListener("input", () =>
    monitoringAddButton(confirmEditButton)
  );
  authorEdit.addEventListener("input", () =>
    monitoringAddButton(confirmEditButton)
  );
  pagesEdit.addEventListener("input", () =>
    monitoringAddButton(confirmEditButton)
  );
};

const setButtonsListeners = () => {
  // LIST BOOKS SCREEN
  addBookButton.addEventListener("click", () => showScreeTwo());

  // ADD BOOK SCREEN
  confirmFormButton.addEventListener("click", () => addBook());
  cancelFormButton.addEventListener("click", () => showScreenOne());

  // EDIT BOOK SCREEN
  confirmEditButton.addEventListener("click", () => confirmEditBook());
  cancelEditButton.addEventListener("click", () => showScreenOne());
  deleteBookButton.addEventListener("click", () => deleteBook());
};

const saveBooks = () => { // save books array in local storage
  localStorage.setItem("books", JSON.stringify(books));
};

navigator.serviceWorker.register('./sw.js');