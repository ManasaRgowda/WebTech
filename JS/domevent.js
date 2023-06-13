let button=document.querySelector("button");
console.log(button);

//onclick is an event
button.onclick=()=>
{
    document.body.style.backgroundColor="pink";
}

//by calling function
function manu()
{
    document.body.style.backgroundColor="blue";
}

//add event listener
let btn=document.querySelector("#demo");
console.log(btn);
btn.addEventListener('onclick',()=>{
    document.body.style.backgroundColor="red";
})
