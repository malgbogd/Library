let myBooks= [];
const myLibrary = document.querySelector('.bookMenu')
let title;
let author;
let pages;
let read;



function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
  getInput()
  checkIfEmpty();
const book = new Book(title,author,pages,read);
console.log(book);
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

document.getElementById('add').addEventListener('click', addBookToLibrary);