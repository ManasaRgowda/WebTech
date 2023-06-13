// //without taking form tag  
//on click event
// let btn=document.querySelector("button");
// btn.addEventListener("click",()=>{
//     let un=document.getElementById('user').value;
//     let pass=document.getElementById('pass').value;
//     let div=document.querySelector('div');
//     div.innerText=(`${un} and ${pass}`);  //to get the entered value inside the div
//     div.style.border="5px groove black";
//     div.style.width="200px";
//     div.style.height="100px";
//     div.style.backgroundColor="pink";
//     div.style.color="red";
// })

//if u take form tag the data is go to server and shows ans in console
//*****sumbit used only in the forms******

//on submit event
// let form=document.querySelector('form')
// form.addEventListener("submit",(e)=>{  //take any variable inside the function to prevent the data or to avoid popup
//     let un=document.getElementById('user').value;
//     let pass=document.getElementById('pass').value;
//     console.log(un,pass);
//     e.preventDefault();   //it holds the data to go to the server
// })

//key events
//key up, keydown, keypress
// let input=document.querySelector('input');
// input.addEventListener("keyup",()=>{
//     console.log("keypress"); //to count the key press or key down or keyup
// })

//to generate random number and change bg-color 
 let input1=document.querySelector('input');
input1.addEventListener("keyup",()=>{
let  rc= Math.ceil(Math.random()*100000).toString(16);
console.log(rc);
document.body.style.backgroundColor=`#${rc}`
})
