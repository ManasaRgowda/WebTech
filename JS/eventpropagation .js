let gp=document.querySelector('.gp');
let p=document.querySelector('.p');
let c=document.querySelector('.c');


gp.addEventListener("click",e=>{
    console.log("grandparent");
    e.stopPropagation();   //it wont go for further event it stops here only
})

gp.addEventListener("click",e=>{
    console.log("grandparent capture");
})
 gp.addEventListener("click",e=>{
     console.log("grandparent bubbling");
 })

gp.addEventListener("click",e=>{
    console.log("parent");
},capture="true");  //it captures first

p.addEventListener("click",e=>{
    console.log("parent capture");  //captures the parent
})

p.addEventListener("click",e=>{
    console.log("parent bubbling");  //bubbles the parent
})

c.addEventListener("click",e=>{
    console.log("child");
})

c.addEventListener("click",e=>{
    console.log("child capture");
})
c.addEventListener("click",e=>{
    console.log("child bubbling");
})

document.addEventListener("click",e=>{
    console.log("document");
})

document.addEventListener("click",e=>{
    console.log("document capture");
})
document.addEventListener("click",e=>{
    console.log("document bubbling");
})



