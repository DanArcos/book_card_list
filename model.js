import {updateDisplay} from "./script.js";

//Constructor for creating a book
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function(){
    let string = this.title + " by " + this.author + ", " + this.pages.toString() + " pages, "
    let read_var =  (this.read ? "read." : "not read yet.")
    return string + read_var
}


function addBookToLibrary(book, array) {
    //If book is not type book, do nothing
    //Otherwise push to array

    if (book instanceof Book){
        console.log('Adding Book to Library.....')
        array.push(book)
        console.log(array)

        updateDisplay()
    }
    else{
        console.log("ERROR, NOT A BOOK TYPE")
    }
    
    
}

export{Book, addBookToLibrary}