console.log("in this we are creating a projects")
//Creating Constrctor

function Book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type
}

//display Constrtctor


//




//Add submit Event Listner TO libraryform

let libraryform=document.getElementById("libraryform")
libraryform.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e){
    
    console.log("You Have Been Clicked ")
    let name=document.getElementById("").value;
    let author=document.getElementById("").value;
    let type;

    let  Fiction=document.getElementById("Fiction")
    let Programming=document.getElementById("Programming")
    let  Cooking=document.getElementById("Cooking")

    if(Fiction.checked){
        type=Fiction.value
    }
    else if(Programming.checked){
        type=Programming.value
    }
    else if(Cooking.checked){
        type=Cooking.checked
    }

    let book=new Book(name,author,type)
    console.log(book)

    


    e.preventDefault()
  
 

}



