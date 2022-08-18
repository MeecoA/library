let myLibrary = []; 

class Book{
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
}
}
function addBook(book){
    myLibrary.push(book);
}



function display(){
    let booksContainer = document.querySelector('.books-container');
    for (let i = booksContainer.childElementCount; i < myLibrary.length; i++) {

        
        let card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = i;
        booksContainer.appendChild(card);

        let bookTitle = document.createElement('div');
        bookTitle.classList.add('book-items');
        card.appendChild(bookTitle);
        bookTitle.textContent = 'Title: '+myLibrary[i].title;

        let bookAuthor = document.createElement('div');
        bookAuthor.classList.add('book-items');
        card.appendChild(bookAuthor);
        bookAuthor.textContent ='Author: '+ myLibrary[i].author;

        let bookPages = document.createElement('div');
        bookPages.classList.add('book-items');
        card.appendChild(bookPages);
        bookPages.textContent = 'Pages: '+myLibrary[i].pages; 

        let bookIsRead  = document.createElement('div');
        bookIsRead.classList.add('book-items');
        card.appendChild(bookIsRead);
        bookIsRead.textContent = 'Read?: '+myLibrary[i].isRead; 


        let buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('stat-deleteButton');
        card.appendChild(buttonsContainer);
       
   
        let statButton = document.createElement('button');
        statButton.classList.add('stat-btn');
        buttonsContainer.appendChild(statButton);
        statButton.textContent = 'Toggle Read'

        statButton.addEventListener('click', ()=> {
            if (bookIsRead.textContent == 'Read?: false') {
                this.isRead.value = 'Yes'; 
                console.log(this.isRead.value);
                bookIsRead.textContent = 'Read?: true';
            }
            else if(bookIsRead.textContent == 'Read?: true') {
                this.isRead.value = 'No'; 
                console.log(this.isRead.value);
                bookIsRead.textContent = 'Read?: false';
            }
        })

      
        let deleteButton = document.createElement('button'); 
        deleteButton.classList.add('deleteButton')
        buttonsContainer.appendChild(deleteButton);
        deleteButton.textContent = "Delete";
        
        deleteButton.addEventListener('click',() => {
            myLibrary.splice(card.dataset.index, 1);
            booksContainer.removeChild(card);
            let children = Array.from(booksContainer.childNodes);
			// updating {dataset.index} property of card div to be equal to array index.
			// so deleting cards can be handled properly.
            // got it from github
			for (let i = 0; i < children.length; i++) {
				children[i].dataset.index = i;
			}
            console.log(myLibrary);
        }); 


}
}

function reset() {
        this.title.value = '';
        this.author.value = '';
        this.pages.value = '';
        this.isRead.value = '';
}


const addBookButton = document.querySelector('#addBookButton');
addBookButton.addEventListener('click', ()=> {
    const inputTitle = document.querySelector('#title').value;
    const inputAuthor = document.querySelector('#author').value;
    const inputPage = document.querySelector('#pages').value;
    const isReadCheckbox = document.querySelector('#isRead').checked;
    addBook(new Book(inputTitle, inputAuthor, inputPage, isReadCheckbox));
    display();
    container.classList.remove('show-form');
    reset();
    
}); 

//modals 

const newBookButton = document.querySelector('.newBookButton'); 
const container = document.querySelector('.container');
const cancelButton = document.querySelector('#cancelButton');


newBookButton.addEventListener('click',()=> {
    container.classList.add('show-form');
});

cancelButton.addEventListener('click',()=> { 
    container.classList.remove('show-form');
}); 
