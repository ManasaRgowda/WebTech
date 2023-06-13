let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    let div=document.querySelector('div');
    div.innerHTML="hello world";
    div.style.color="red";
    div.style.border="5px groove green";
    div.style.width="200px";
    div.style.fontSize="50px";
    div.style.backgroundColor="yellow"
    div.style.transition="5s";
})


//to create table
let tab=document.createElement('table');
let tab1=document.createElement('tr');
let tab2=document.createElement('td');
let tab3=document.createElement('td');
let tab4=document.createElement('td');
// tab1.style.border="5px solid"        not worked for row
tab2.style.border="3px solid green"  // to stryle the columns
tab3.style.border="3px solid skyblue"
tab4.style.border="3px solid blue"
tab.style.border="2px solid black"

document.body.append(tab); //to put the table inside the html file
tab.append(tab1)  //to put row into table
//to put all the columns into one row
tab1.append(tab2)
tab1.append(tab3)
tab1.append(tab4)
//to insert the value into the column
tab2.innerHTML="Id";
tab3.innerHTML="name";
tab4.innerHTML="place";



// to create another one row
let tab00=document.createElement('tr');
let tab01=document.createElement('td');
let tab02=document.createElement('td');
let tab03=document.createElement('td');
// tab1.style.border="5px solid"        not worked for row
tab01.style.border="3px solid green"
tab02.style.border="3px solid skyblue"
tab03.style.border="3px solid blue"
tab.style.border="2px solid black"

document.body.append(tab); //to put the table inside the html file
tab.append(tab00) 
tab00.append(tab01) 
tab00.append(tab02)
tab00.append(tab03)

tab01.innerHTML="Id";
tab02.innerHTML="name";
tab03.innerHTML="place";