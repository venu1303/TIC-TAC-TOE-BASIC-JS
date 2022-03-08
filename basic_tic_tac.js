//restart game button
var restart=document.querySelector("#b")
//grabs all the squares
// here it returns all as array 
var squares=document.querySelectorAll("td");

//function to clear all the squares
function clearboard(){
    for(var i=0;i<squares.length;i++){
        squares[i].textContent="";
    }
}
restart.addEventListener("click",clearboard);
//check the square maker
var c1=document.querySelector("#one");
// var c2=document.querySelector("#two");
// var c3=document.querySelector("#three");
// var c4=document.querySelector("four");
// var c5=document.querySelector("five");
// var c6=document.querySelector("#six");
// var c7=document.querySelector("#seven");
// var c8=document.querySelector("#eight");
// var c9=document.querySelector("#nine");


// writing for each data clearInterval,separetely;
// c1.addEventListener('click',function(){
//     if(c1.textContent==""){
//         c1.textContent="X";
//     }
//     else if(c1.textContent==="X"){
//         c1.textContent="O";
//     }
//     else{
//         c1.textContent="";
//     }
// })
// c1.addEventListener('dblclick',function(){
//     c1.textContent="O";
// })

//for loop to add event listeners to all the squares
for(var i=0;i<squares.length;i++){
    squares[i].addEventListener("click",changeMarker);
}

//this key word usage:
function changeMarker(){
    if(this.textContent===""){
        this.textContent="X";
    }
    else if(this.textContent==="X"){
        this.textContent='O';
    }
    else {
        this.textContent="";
    }
}

