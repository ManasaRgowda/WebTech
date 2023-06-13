let array=[1,"string",true,undefined,null,2n,function a(){}]
console.log(array);

console.log(typeof array);
// to check its an array or not
console.log(Array.isArray(array));
console.log(array instanceof Array);


// types to create an array
// literal type

let a=[100,150,200]
console.log(a, typeof a);

let a1=[];
console.log(a1);

// constructor type

let b=new Array(100,200,300);
console.log(b,typeof b);

// how to access and modify  

const bus=[10,20,30,40,50]
// access
console.log(bus);
console.log(bus[3]);

// modify
console.log(bus[3]="hi");
console.log(bus);

// Arrays methods
// push method

let pu=["hii","ga",100,200]
console.log(pu);
console.log(pu.push(500,600));
console.log(pu);

// unshift method

let pu1=["hii",100,200,500]
console.log(pu1.unshift(10));
console.log(pu1);

// pop method
let pu2=["hii",100,200,500]
console.log(pu2.pop());
console.log(pu2);

// shift mthod
let pu3=["hii",100,200,500]
console.log(pu3.shift());
console.log(pu3);

// slice method
let pu4=["hii",100,200,500,600]
console.log(pu4.slice(2,4));
console.log(pu4);

// splice method
let pu5=["hii",100,200,500]
console.log(pu5.splice(1,2,"manasa","manoj"));
console.log(pu5);

// split method
let aa="manasa";
console.log(aa);
console.log(aa.split());
console.log(aa.split("").reverse().join(""));

let array1=[100,200,300,400,500]

for(index in array1){
    console.log(index);
}

for(values of array1){
    console.log(values);
}

let f=array1.forEach((values,index) =>
{
    console.log(values,index);
}
);

// filter

let bb=[10,20,30,40,50]

let bb1=bb.filter((x)=>{
    return x>20;
})
console.log(bb1);

// map

let cc=bb.map((y)=>
{return y+y*0.18
})
console.log(cc);

// reduce

let dd=bb.reduce((value,accum)=>{
  return value+accum;
})
console.log(dd);


