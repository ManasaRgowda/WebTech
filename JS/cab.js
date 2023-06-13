let sports="football";
let a={
    sports:"cricket",
    team:"india",
    color:function()
    {
        return this.sports;
    }
}
console.log(a.color());


let b={
    name:"rohith",
    lname:"sharma",
}
console.log(b);

console.log(a.color.call(b));

//spread method
let y={
    id:101,
    name:"manasa"
}
let u={
    ...y, //if u use this y is also belongs to u
    paint:"asian",
    color:"orange"
}
console.log(u);

//rest method --> 100-c, 20-a, rest of them belongs to b
function f(c,a,...b) {
    console.log(c,a,b);
}
f(100,20,30,40,50,60)

//array de-structure--->if u want to fetch the values apart from index u can go through this

let array=[2,3,4,5];

[x,y,z,m,n]=array;
console.log(x);
console.log(y);
console.log(z);
console.log(m);
console.log(n);
