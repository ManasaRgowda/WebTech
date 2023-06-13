console.log(document);

console.log(document.URL);

console.log(document.head);

console.log(document.title);

document.title="Web Tech"
// console.log(document.title);

console.log(document.body);
console.log(document.all);

// DOM Method

// 1.Get element by ID
let id=document.getElementById("demo");
console.log(id);
id.innerHTML="Pakka ESCN"
id.style.backgroundColor="skyblue"
id.style.color="black"
id.style.fontSize="50px"
id.style.border="10px solid yellow"

//get elenent by classname
let test=document.getElementsByClassName('rcb') //content
console.log(test);
test[2].style.backgroundColor="pink"  //through index we can color the single element
 
//06-04-2023
console.log(Array.isArray(test)); //to check it is an array or not

let rr=Array.from(test); // to store in array
console.log(rr, typeof rr)
console.log(Array.isArray(rr)); //to check it is an array or not

//get element by tag name
let tag=document.getElementsByTagName('pre')
console.log(tag);
tag[0].style.backgroundColor="red"  //through index we can target the single element
tag[1].style.backgroundColor="blue"
console.log(Array.isArray(tag));

let mm=Array.from(tag)
console.log(mm,typeof mm);
console.log(Array.isArray(mm));

//get element by query selector-it selects only 1st element

let query=document.querySelector(".demo1")
console.log(query);
query.style.fontSize="55px"
query.style.color="brown"

//get element by query selector all by using class name

let queryAll=document.querySelectorAll('.demo1');
console.log(queryAll);
queryAll[1].style.color="orange" // we cant target all in the elements at a time
console.log(Array.isArray(queryAll));

//get element by query selector all by using id name

let queryAll1=document.querySelectorAll('#rcb1');
console.log(queryAll1);
queryAll1[1].style.color="orange" 

//how to create element without using HTML

let create= document.createElement('h1');
console.log(create);

//inserting the text
let text=document.createTextNode("hello good morning");
console.log(text);

//insert the content inside the tag
create.appendChild(text);

//gives the output in the document interface
document.body.append(create);
create.style.color="purple";


let text1=document.getElementById("red");
console.log(text1);
text1.innerHTML="royal challengers banglore"; //shows only content in web page
text1.innerText="delhi capitals";   //shows content with tag in both ebpage and cosole
text1.innerHTML="<h1>smruthi mandanna</h1>";  //it shows content in webpage and (<h1>smruthi mandanna</h1>)-->... this in side h6
text1.innerText="<h1>kavi poorvaj kanya charan</h1>"; //it shows same as in web page and console within h6

