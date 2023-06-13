// global scope
var a=10;
console.log(a);

// local and script scope
let b=20;
console.log(b);
const c=30;
console.log(c);

// block scope we can't access let and const out side the block 
// console.log(d); //error
{
let d=40;
console.log(d);
}
const e=50;//same ans as well in the let and var
{
    console.log(e);//50
}

// functional scope we can't access let and const out side the block
function demo()
{
    let f=60;
    console.log(f);
    const g=70;
    console.log(g);
    var h=80;
    console.log(h);
}
//console.log(g);//error
//console.log(h);//error
demo()