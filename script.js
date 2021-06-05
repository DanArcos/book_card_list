

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


function addBookToLibrary(book) {

    if (book instanceof Book){
        myLibrary.push(book)

        updateDisplay()
    }
    //If book is not type book, do nothing
    //Otherwise push to array
    
}


function updateDisplay() {
    let counter = 1;
    
    //destroy current display if it exists
    console.log('Destroying Current Display ')
    console.log('Removing elements')
    console.log('Is there a book card class?: ')
    console.log(document.querySelectorAll(".book_card").length != 0)
    if (document.querySelectorAll(".book_card").length != 0){
        document.querySelectorAll(".book_card").forEach(element => {
            console.log('Removing:' + element.id)
            element.remove();
        })
    }
    
    
    //set up _ number of cards, per length of the array
    console.log('Iterating through books to populate divs')
    myLibrary.forEach(book => {
        console.log(book.title)
        
        const book_card = document.createElement('div')
        book_card.id = 'book_' + counter;
        book_card.classList.add('book_card')
        counter = counter + 1
        
        const book_title = document.createElement('div')
        book_title.classList.add('book_title')
        book_title.textContent = book.title;

        const book_author = document.createElement('div')
        book_author.classList.add('book_author')
        book_author.textContent = book.author;

        const book_read = document.createElement('div')
        book_read.classList.add('book_read')
        book_read.textContent = "Read: " + book.read
        
        console.log(counter)
       
        
        book_card.appendChild(book_title)
        book_card.appendChild(book_author)
        book_card.appendChild(book_read)

        book_table.appendChild(book_card)
    })

    
}

const book_table = document.querySelector("#container");

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
const readyPlayerOne = new Book("Ready Player One", "Earnest Kline", 400, true)

console.log('-----------Begin Tests-----------')
console.log(theHobbit.info())
console.log(theHobbit.constructor)
console.log(theHobbit instanceof Book)
console.log('-----------End Tests-----------')

//Initialize Library as empty array
let myLibrary = []

console.log("Page loaded")
console.log("Inital library []" + myLibrary)

console.log("-------------------------")
console.log('Add first book: ' + theHobbit.title)
addBookToLibrary(theHobbit)
console.log("-------------------------")
console.log('Add second book: ' + readyPlayerOne.title)
addBookToLibrary(readyPlayerOne)
console.log("-------------------------")

//updateDisplay()