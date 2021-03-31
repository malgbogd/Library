let myBooks = [] ;
const myLibrary = document.querySelector('.books')
let title;
let author;
let pages;
let read;

class Book {
  constructor(title,author,pages,read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read;
        this.id = myBooks.length
    }
}

const newBooks = (() => {
  if (localStorage.length == 0) {

    myBooks.push(new Book("Dance Anatomy","Jacqui Greene Haas", "258","not read"));
    myBooks.push(new Book("Applied Anatomy of Aerial Arts" ,"Emily Scherb, DPT", "187","read"));
  } else {

    let mySavedBooks = JSON.parse(localStorage.getItem("savedBooks"));
    mySavedBooks.map((element) => {
      newBook = new Book(element.title,element.author,element.pages,element.read);
      myBooks.push(newBook);
    });
  }
})();

function displayBooks(){
  
  myLibrary.innerHTML ="";
  
    for (let i=0; i < myBooks.length; i++) {

      function changeStyleByRead(){
        if (myBooks[i].read == "read") {
        card.className = "readBook"
        } else {
          card.className = "book"
        }
      }

      let card = document.createElement('div');
      changeStyleByRead();
    
      let bookTitle = document.createElement('div');
      bookTitle.className = 'title'
      bookTitle.innerHTML = myBooks[i].title;

    
      let bookAuthor = document.createElement('div');
      bookAuthor.className = 'author';
      bookAuthor.innerHTML = myBooks[i].author;
    
      let bookPages = document.createElement('div');
      bookPages.className = 'pages';
      bookPages.innerHTML = myBooks[i].pages + ' pages';
    
      let bookRead = document.createElement('button');
      bookRead.className = 'read';
      bookRead.innerHTML = myBooks[i].read;
    
      let bookDealete = document.createElement('button');
      bookDealete.className = 'delete';
      bookDealete.innerHTML = 'Delete';
      

      myLibrary.appendChild(card);
      card.appendChild(bookTitle);
      card.appendChild(bookAuthor);
      card.appendChild(bookPages);
      card.appendChild(bookRead);
      card.appendChild(bookDealete);

      bookRead.addEventListener('click', function readNotRead(){
        if (myBooks[i].read==="read") {
          myBooks[i].read = "not read"
          changeStyleByRead();
          saveBooksToLocal();
        } else {
          myBooks[i].read ="read"
          changeStyleByRead();
          saveBooksToLocal();
        }
        bookRead.innerHTML = myBooks[i].read;
        });
      
      

      bookDealete.addEventListener('click', function deleteBook() {
        myBooks.splice(i,1);
        myLibrary.removeChild(card);
        saveBooksToLocal();
      });
    }
  }

function saveBooksToLocal (){
  localStorage.clear();
  let mySavingBooks = JSON.stringify(myBooks);
  localStorage.setItem("savedBooks", mySavingBooks);
}

function addBookToLibrary() {
  getInput();
  if (checkTitle()  && checkAuthor()  && checkPages()  && checkRead()) {
    myBooks.push(new Book(title,author,pages,read));
    clearInput();
    displayBooks();
    saveBooksToLocal();
  }
}

function getInput() {
title = document.getElementById("title").value;
author = document.getElementById("author").value;
pages = document.getElementById("pages").value;
read = document.getElementById("read").value;
return title, author, pages, read;
}

function checkTitle() {
  if (title.length == 0) {
    alert("Please add the title.");
    return false;
  } else {
    return true;
  }
}

function checkAuthor() {
  if (author.length == 0) {
    alert("Please add the author.");
    return false;
  } else {
    return true;
  }
}

function checkPages() {
  if ((pages.length == 0) || (isNaN(Number(pages))) || (Number(pages)<=0)) {
    alert("How many pages is the book?");
    return false;
  } else {
    return true;
  }
}

function checkRead() {
  if (read.length == 0) {
    alert("Did you read the book?");
    return false;
  } else {
    return true;
  }
}

function clearInput(){
document.getElementById("title").value ="";
document.getElementById("author").value="";
document.getElementById("pages").value="";
document.getElementById("read").value="";
}


document.getElementById('add').addEventListener('click', addBookToLibrary);

displayBooks();
