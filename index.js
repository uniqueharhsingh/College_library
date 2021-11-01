console.log("In this We are creating a projects this is tutorial 33")

//Creating Protypes using Constrctor
function Book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;

}


//Adding method to display constructor
function Display() {

}


//Adding Method to display protoype
// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.AddEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (computerprogramming.checked) {
        type = computerprogramming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    e.preventDefault();



















   

 


}
























