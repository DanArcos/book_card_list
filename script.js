import {Book, addBookToLibrary} from "./model.js";

console.log("Page loaded")

//Initialize Library as empty array
var myLibrary = []
console.log("Initial library []" + myLibrary)


//Link up the book table
const master_table = document.querySelector("#container");

function updateDisplay() {
    console.log('--------Updating Display------------')
    let counter = 0;
    
    //destroy all current books
    //console.log('Destroying Current Display ')
    //console.log('Removing elements')
    document.querySelectorAll(".book_card").forEach(element => {
        //console.log('Removing:' + element.id)
        element.remove();
    })

    
    //Set up new cards
    //set up _ number of cards, per length of the array
    console.log('Iterating through books to populate divs')
    myLibrary.forEach(book => {
        //console.log('current book counter: ' + counter)
        //console.log(book.title)
        
        //Create overall card div
        let book_card = document.createElement('div')
        book_card.id = 'book_' + counter;
        book_card.dataset.index_number = counter;
        book_card.classList.add('book_card')
        book_card.classList.add('added_book')
        

        let top_row = document.createElement('div')
        top_row.classList.add('book_card_top_row')

        let top_left = document.createElement('span')
        top_left.classList.add("top_left")
        top_left.classList.add('material-icons')
        top_left.textContent = "clear"
        top_left.addEventListener('click', (e)=>{
            console.log("Clicked X")
            console.log('target ' + e.target)
            console.log("index number:" + e.target.parentElement.parentElement.dataset.index_number)
            console.log("Before array")
            console.log(myLibrary)
            console.log(myLibrary[e.target.parentElement.parentElement.dataset.index_number])
            if (myLibrary.length===1){
                myLibrary = []
            }
            else {
                console.log('splicing')
                myLibrary.splice(e.target.parentElement.parentElement.dataset.index_number,1)
            }
            
            //console.log("After array")
            //console.log(myLibrary)

            updateDisplay()
        })

        let top_right = document.createElement('span')
        top_right.classList.add('material-icons')
        top_right.classList.add('top_right')
        top_right.textContent = "edit"
        
        top_row.appendChild(top_left)
        top_row.appendChild(top_right)
        

        let book_title = document.createElement('div')
        book_title.classList.add('book_title')
        book_title.textContent = book.title;

        let book_author = document.createElement('div')
        book_author.classList.add('book_author')
        book_author.textContent = book.author;
        
        let book_read = document.createElement('span')
        book_read.classList.add('material-icons')
        book_read.classList.add('book_read_img')
        book_read.classList.add('book_read_false')
        book_read.textContent = 'done'
        

        book_read.addEventListener('click', (e)=> {
            //Toggle read
            if(book.read === false){
                book.read = true;
                book_read.classList.remove('book_read_false')
                book_read.classList.add('book_read_true')
            }
            else {
                book.read = false;
                book_read.classList.add('book_read_false')
                book_read.classList.remove('book_read_true')
            }
        })

        //console.log('Creating book card')
        book_card.appendChild(top_row)
        book_card.appendChild(book_title)
        book_card.appendChild(book_author)
        book_card.appendChild(book_read)

        //console.log('Attaching book card to list')
        master_table.appendChild(book_card)

        counter = counter + 1
        
    })

    //Append the button to the end of the book table
    //console.log('Add Final New Book Option')
    master_table.appendChild(add_book_div)
}

/////////////////////////////////
//Add logic for new book card
const add_book_div = document.createElement('div')
add_book_div.classList.add("book_card")
add_book_div.classList.add("add_book")
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

//Open New Book Form When add Book Block is selected
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
    //console.log('Adding New Book...')
    //console.log(e.target)
    if (e.target == modal){
        modal.style.display = 'none';
    }
})

const sub_button = document.getElementById("submit_button")
sub_button.addEventListener('click', (e) => {
    
    let form_book_name = document.getElementById('new_book_name').value;
    let form_book_author = document.getElementById('new_book_author').value;
    //let form_book_pages = Number(document.getElementById('new_book_pages').value);

    console.log('--------------------')
    console.log('processing new book')

    let new_book = new Book(form_book_name, form_book_author, 0, false) //Add a new book
    console.log(new_book.info())
    addBookToLibrary(new_book, myLibrary)

    console.log(myLibrary)

    modal.style.display = 'none'; //Close modal display 

})

const edit_modal = document.getElementById('myModal_edit')

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