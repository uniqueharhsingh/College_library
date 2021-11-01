console.log("In this We are creating a projects this is tutorial 33")

//Creating Protypes using Constrctor
function Book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;

}

//Adding method to display constructor


//Adding Method to display protoype


//Adding submit event listner to the libraryform

let libraryform=document.getElementById("libraryform")
libraryform.addEventListener("submit",libraryformsubmit);

function libraryformsubmit(e){
    e.preventDefault()
    console.log("You Have been CLiked");

    let name=document.getElementById("bookname").value;
    let author=document.getElementById("author").value;
    
    let type;

    //Finction,cooking,Computer programming

    let Fiction=document.getElementById("Fiction");
    let computerProgramming=document.getElementById("ComputerProgramming");
    let cooking=document.getElementById("cooking");

    if (Fiction.checked){
        type=Fiction.value;
    }
    else if (cooking.checked){
        type=cooking.value

    }
    else if(computerProgramming.checked){
        type=computerProgramming.value
    }


    let Books=new Book(name,author,type)
    console.log(Books);















   

 


}
























