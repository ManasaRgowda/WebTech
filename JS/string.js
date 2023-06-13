let str="manasa";
console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.indexOf('u'));
console.log(str.indexOf('n'));

console.log(str.charAt(8));
console.log(str.slice(2,4));

console.log(str.split("").reverse().join(""));
console.log(str.split("+").reverse().join("+"));

console.log(str.endsWith("b"));
console.log(str.startsWith('m'));
console.log(str.substring(2));

// 3 ways to concat
let d="web";
let d1="technology";
let d2="students";

console.log(d.concat(d1.d2));
console.log(`${d} ${d1} ${d2}`);
console.log(d+d1+d2);


console.log(str.lastIndexOf("a"));
console.log(str.repeat(5));
console.log(str.replace("sa","su"));
console.log(d1.includes("cy"));
console.log(d2.replaceAll("s","*"));