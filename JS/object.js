// ways to screate the object
// Literal way to create object
let obj={
    id:500,
    name:"manasa",
    salary:500
}
console.log(obj,typeof obj);

// to access the key and value there are two ways
console.log(obj.salary);

console.log(obj["salary"]);

// how to add the values to the existing object
obj["address"]="banglore";
obj.pincode=560010;  //obj.pincode="560010";  
console.log(obj);

// creating object inside another object
let obj1={
    color:"red",
    shape:"square",
    computer:{
        ram:"4gb",
        color:"gray",
        processor:"i5"
    }
}
console.log(obj1["computer"]["ram"]);
console.log(obj1.computer.ram);

// ctreating function inside an object

let ob={
    sports:"cricket",
    stadium:'chinnaswamy',
    // players:function()
    players:()=>
    {
        let pname="sachin";
        let jno=29;
        return `${pname} ${jno}`
    }
}
console.log(ob.players());

// whenever we use this keyword inside the function or object it is pointing to the current object

let ob1={
    sports:"cricket",
    stadium:'chinnaswamy',
    players:function()
    // players:()=>
    {
        return this.sports; // we can't access this key word insie the arrow function becz sports is not there within that function
        // if use this keyword inside arrow funtion it is not pointing to the current object it throwing an undifined
    }
}
console.log(ob1.players());

// 31/03/2023

courses="java";
let y10={
    courses:"web tech",
  place:"banglore",
   colors:function()
   {
    let courses="sql"
    return this.courses
   }
}
console.log(y10.colors()
);

// using arrow fun
courses="java";
let y11={
    courses:"web tech",
    place:"banglore",
  colors:()=>
   {
    let courses="sql"
    return this.courses
   }
}
console.log(y11.colors());

//we can create object inside an array
let emp=[
    {
    id:101,
    ename:"manoj"
},
{
    id:102,
    ename:"manasa"
}
]
console.log(emp,typeof emp); //to check its an object or not
console.log(emp[0].ename);

// // using new keyword way to create object

let yy=new Object()
console.log(yy,typeof yy);
yy["id"]=110;
yy["name"]="rabbit";
console.log(yy.id);
console.log(yy.name);
console.log(yy);


// why objects are mutable
let mute={
    pColor:"white",
    pHeight:"30inch"
}
console.log(mute);
mute.pColor="red";
console.log(mute);

//variables can hold numbers also 
let k={
    1:"duster",
    2:"marker"
}
console.log(k);
console.log(k[2]);

// object method
// freez method --> after freeze we cant update

let free={
    name:"loki",
    place:"mysore"
}
free["name"]="mohan"
console.log(free);

Object.freeze(free)

free["name"]="lakki";
console.log(free);

// assign method--> to collabrate all the methods into one object

let ab={
    company:"tyy"
}
console.log(ab);

ab.company="infosys"
console.log(ab);

let bb={
    name:"shreedhar sir"
}
console.log(bb);

let cc=Object.assign(bb,ab)
console.log(cc);

 let key=Object.keys(mute);
 console.log(key);

 let value=Object.values(mute);
 console.log(value);

// entries method--> to convert from obects to arrays

let enter={
    sName:"abc",
    sId:200
}
console.log("before entries");
console.log(enter);
console.log("after entries");
console.log(Object.entries(enter));
console.log(enter);

//math object

let oo=122.1;

let math1=Math.ceil(oo);
console.log((math1));

let math2=Math.floor(oo);
console.log((math2));

//OTP generate

let random=Math.ceil(Math.random()*100000).toString(36)
console.log(random);

// to find min and max values

let u=2.3;
let y=3;
let z=5/4;
console.log(`the min value ${Math.min(u,y)}`);
console.log(`the max value ${Math.max(u,y)}`);
console.log(`the power value ${Math.pow(u,y)}`);
console.log(`the sqrt value ${Math.sqrt(u,y)}`);
console.log(`the cube root value ${Math.cbrt(u,y)}`);
console.log(`the pi value ${Math.PI}`); //to get value od pi
console.log(`the round figure value ${Math.round(u)}`);
console.log(`the trunc value ${Math.trunc(z)}`);  //it gives quotient value in integer not in decimal
console.log(`the sin value of u ${Math.sin(u)}`);
console.log(`the cos value of u ${Math.cos(u)}`);
console.log(`the tan value of u ${Math.tan(u)}`);

//date
//by using constructor
let date=new Date()
console.log(date);

//by using Date()
console.log(Date());

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getMonth());

let date1=new Date(2023,3,6,10,12,15,10) //yr,month,date,hours,min,sec,milisec
console.log(date1);


//to change background colors randomly

let random1=Math.ceil(Math.random()*100000).toString(17).toUpperCase()
console.log(random1);
let body=document.querySelector('body');
console.log(body);
body.style.backgroundColor=`#${random1}`;
// let body1=document.querySelector('h1');
// console.log(body1);
// body.style.backgroundColor=`#${random1}`;

