import {Book, addBookToLibrary} from "./model.js";

console.log("Page loaded")

//Initialize Library as empty array
var myLibrary = []
console.log("Initial library []" + myLibrary)


//Link up the book table
const master_table = document.querySelector("#container");

function updateDisplay() {
    console.log('--------Updating Display------------')
    let counter = 1;
    
    //destroy all current books
    console.log('Destroying Current Display ')
    console.log('Removing elements')
    document.querySelectorAll(".book_card").forEach(element => {
        console.log('Removing:' + element.id)
        element.remove();
    })

    
    //Set up new cards
    //set up _ number of cards, per length of the array
    console.log('Iterating through books to populate divs')
    myLibrary.forEach(book => {
        console.log('current book counter: ' + counter)
        console.log(book.title)
        
        let book_card = document.createElement('div')
        book_card.id = 'book_' + counter;
        book_card.classList.add('book_card')
        counter = counter + 1
        
        let book_title = document.createElement('div')
        book_title.classList.add('book_title')
        book_title.textContent = book.title;

        let book_author = document.createElement('div')
        book_author.classList.add('book_author')
        book_author.textContent = book.author;

        let book_read = document.createElement('div')
        book_read.classList.add('book_read')
        book_read.textContent = "Read: " + book.read
        
        console.log('Creating book card')
        book_card.appendChild(book_title)
        book_card.appendChild(book_author)
        book_card.appendChild(book_read)

        
        console.log('Attaching book card to list')
        master_table.appendChild(book_card)
        
    })

    //Append the button to the end of the book table
    console.log('Add Final New Book Option')
    master_table.appendChild(add_book_div)
}

/////////////////////////////////
//Add logic for new book card
const add_book_div = document.createElement('div')
add_book_div.classList.add("book_card")
add_book_div.id = 'add_book_div'
add_book_div.textContent = 'Add Book'

//Hovering effects
add_book_div.addEventListener('mouseover', (e)=> {
    //initiate tranisition to new class
    add_book_div.classList.add('hovering')
})
add_book_div.addEventListener('mouseleave', (e)=> {
    //initiate transition back
    add_book_div.classList.remove('hovering')
})

//What happens when we click the book
add_book_div.addEventListener('click', (e)=>{
    //Make form displayable
    modal.style.display = "block"; 
})



/////////////////FORM LOGIC////////////////////////
//Link up form table    
const modal = document.getElementById('myModal')

//Link up X out in the modal
const span = document.getElementsByClassName("close")[0];
span.addEventListener('click', (e)=> {
    modal.style.display = 'none';
})

//Link up click outside of the modal content
//You will naturally click on the modal which will then exit
window.addEventListener("click", (e)=> {
    console.log('Adding New Book...')
    console.log(e.target)
    if (e.target == modal){
        modal.style.display = 'none';
    }
})

const sub_button = document.getElementById("submit_button")
sub_button.addEventListener('click', (e) => {
    
    let form_book_name = document.getElementById('form_book_name').value;
    let form_book_author = document.getElementById('form_book_author').value;
    let form_book_pages = Number(document.getElementById('form_book_pages').value);

    console.log('--------------------')
    console.log('processing new book')

    let new_book = new Book(form_book_name, form_book_author, form_book_pages, false) //Add a new book
    console.log(new_book.info())
    addBookToLibrary(new_book, myLibrary)

    console.log(myLibrary)

    modal.style.display = 'none'; //Close modal display

})

//Test Books
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
const readyPlayerOne = new Book("Ready Player One", "Earnest Kline", 400, true)

//console.log('-----------Begin Tests-----------')
//console.log(theHobbit.info())
//console.log(theHobbit.constructor)
//console.log(theHobbit instanceof Book)
//console.log('-----------End Tests-----------')



console.log("-------------------------")
//console.log('Add first book: ' + theHobbit.title)
//addBookToLibrary(theHobbit, myLibrary)
//console.log("-------------------------")
//console.log('Add second book: ' + readyPlayerOne.title)
//addBookToLibrary(readyPlayerOne, myLibrary)
//console.log("-------------------------")

updateDisplay()

export{updateDisplay}