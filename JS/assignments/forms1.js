//Form without using html

let form1=document.createElement("Form")

// let r=document.createTextNode("text")
let user1=document.createElement("label")
console.log(user1);
let text=document.createTextNode('User Name');
user1.appendChild(text)
document.body.append(user1)
let input1=document.createElement("input")
document.body.append(user1)
document.body.append(input1)

let br=document.createElement("br")
console.log(br);

let pwd1=document.createElement("label")
console.log(pwd1);
let text1=document.createTextNode("password")
pwd1.appendChild(text1)

let input2=document.createElement("input")
document.body.append(pwd1)
document.body.append(input2)

let br2=document.createElement("br")
console.log(br);

var button1= document.createElement("button")
var text3= document.createTextNode("submit")
button1.appendChild(text3)
document.body.append(button1)

var button2= document.createElement("button")
var text4= document.createTextNode("Reset")
button2.appendChild(text4)
document.body.append(button2)


//it has to perform transition when i click on button
let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    let div=document.querySelector('div');
    div.innerHTML="Best friend is enough to share everything in your life .. Darling";
    div.style.color="red";
    div.style.border="5px groove green";
    div.style.width="600px";
    div.style.fontSize="50px";
    div.style.backgroundColor="yellow";
    div.style.transitionDuration="5s";

})


//by using jave script we can create the table
let tab=document.createElement('table');
let tab1=document.createElement('tr');
let tab2=document.createElement('td');
let tab3=document.createElement('td');
let tab4=document.createElement('td');
// tab1.style.border="5px solid"        not worked
tab2.style.border="3px solid black"
tab3.style.border="3px solid black"
tab4.style.border="3px solid black"
tab.style.border="5px double blue"

document.body.append(tab); //to put the table inside the html file
tab.append(tab1)
tab1.append(tab2)
tab1.append(tab3)
tab1.append(tab4)

tab2.innerHTML="Id";
tab3.innerHTML="name";
tab4.innerHTML="place";


let tab10=document.createElement('tr');
let tab02=document.createElement('td');
let tab03=document.createElement('td');
let tab04=document.createElement('td');

tab02.style.border="3px solid black"
tab03.style.border="3px solid black"
tab04.style.border="3px solid black"
document.body.append(tab); //to put the table inside the html file
tab.append(tab10)
tab10.append(tab02)
tab10.append(tab03)
tab10.append(tab04)

tab02.innerHTML="01";
tab03.innerHTML="Manasa";
tab04.innerHTML="Mandya";

let tab100=document.createElement('tr')
let tab20=document.createElement('td')
let tab30=document.createElement('td')
let tab40=document.createElement('td')

tab20.style.border="3px solid black"
tab30.style.border="3px solid black"
tab40.style.border="3px solid black"

document.body.append(tab)
tab.append(tab100)
tab100.append(tab20)
tab100.append(tab30)
tab100.append(tab40)

tab20.innerHTML="02"
tab30.innerHTML="Suma"
tab40.innerHTML="mysore"
