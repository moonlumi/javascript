

let count=0
// let=0
//Grabbing the elements by value
let datax=document.getElementById("save-el")
let get=document.getElementById("count-el")
//Function to increment the value by one
function increment(){
    count=count+1
    console.log(get)
    get.innerText=count
}
//Function to save and display the count value,also resets count to 0
function save(){
    let datastring=count+" - "

    datax.innerText+=datastring
    count=0
    get.innerText=0

    console.log(count)
}

