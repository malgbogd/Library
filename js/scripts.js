let myBooks= [];
const myLibrary = document.querySelector('.books')
let title;
let author;
let pages;
let read;

function displayBooks (i){
  
  myLibrary.innerHTML ="";
  
  let a = myBooks.length +1

  for (i=0; i <= a; i++) {
  let card = document.createElement('div');
  card.className = 'book'
  
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
  bookRead.addEventListener('click',readNotRead());
  bookRead.innerHTML = myBooks[i].read;
  
  let bookDealete = document.createElement('button');
  bookDealete.className = 'delete';
  bookDealete.addEventListener('click', deleteCard());
  bookDealete.innerHTML = 'Delete';

  myLibrary.appendChild(card);
  card.appendChild(bookTitle);
  card.appendChild(bookAuthor);
  card.appendChild(bookPages);
  card.appendChild(bookRead);
  card.appendChild(bookDealete);
}

  
}

function readNotRead(){}

function deleteCard(){}

function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    myBooks[myBooks.length] = this
}


function addBookToLibrary() {
  getInput()
  checkIfEmpty();
  new Book(title,author,pages,read);
  displayBooks();
  clearInput();
}

function getInput() {
title = document.getElementById("title").value;
author = document.getElementById("author").value;
pages = document.getElementById("pages").value;
read = document.getElementById("read").value;
return title, author, pages, read;
}

function checkIfEmpty(){
  checkTitle();
  checkAuthor();
  checkPages();
  checkRead();
}

function checkTitle() {
  if (title.length == 0) {
    alert("Please add the title.");
  }
}

function checkAuthor() {
  if (author.length == 0) {
    alert("Please add the author.");
  }
}

function checkPages() {
  if ((pages.length == 0) || (isNaN(Number(pages))) || (Number(pages)<=0)) {
    alert("How many pages is the book?");
  }
}

function checkRead() {
  if (read.length == 0) {
    alert("Did you read the book?");
  } 
}

function clearInput(){
document.getElementById("title").innerHTML.value ="";
document.getElementById("author").innerHTML.value="";
document.getElementById("pages").innerHTML.value="";
document.getElementById("read").innerHTML.value="";
}

new Book("Dance Anatomy","Jacqui Greene Haas", "258","not read")
new Book("Applied Anatomy of Aerial Arts" ,"Emily Scherb, DPT", "187","read")

document.getElementById('add').addEventListener('click', addBookToLibrary);
document.onload(displayBooks());