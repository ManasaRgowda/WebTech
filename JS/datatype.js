// number primitive data type

let a=100;
console.log(a, typeof a);

let b=20.5;
console.log(b, typeof b);

let c=1/2;
console.log(c, typeof c);

// string primitive data type

let str="gm";
console.log(str, typeof str);

let str1='gud girl';
console.log(str1, typeof str1);

let str2=`gud evening`;
console.log(str2, typeof str2);

// use of back tick is we can write variable inside the string
let empname="manasa";
let empsal="20000";
let empid="122";
console.log(`the employee ${empname} has salary ${empsal} and has id ${empid}`);

// null primitive data type is called as error or bug
let n=null;
console.log(n, typeof n);

// big int datatype
let a1=100n;
console.log(a1, typeof a1);

let a2=BigInt(true);
console.log(a2, typeof a2);

let a3=BigInt(false);
console.log(a3, typeof a3);

let a4=BigInt(20);
console.log(a4, typeof a4);

let a5=BigInt(" ");
console.log(a5, typeof a5);

// let a6=BigInt("hi");
// console.log(a6, typeof a6); //we can't convert

let a7=BigInt(1);
console.log(a7, typeof a7);

// undefined datatype
let x;
console.log(x);

var z;
console.log(z);
 
console.log(y);
var y;

// boolean data type 
console.log(!true);
console.log(!false);

let m1=Boolean(0);
console.log(m1, typeof m1);

let m2=Boolean(1);
console.log(m2, typeof m2);

let m3=Boolean("hii")
console.log(m3, typeof m3);

let m4=Boolean("0n");
console.log(m4, typeof m4);

