//to store the data in browser using JS without using any sql, mysql etc.....

//click on ">>" --> "applications" --> "local storage" --> "file" --> now enter the key and values

// //to store the date
// let lstorage=localStorage.setItem("id",100);
// let lstorage0=localStorage.setItem("name","manasa");
// console.log(lstorage,lstorage0);

// //to get the data
// let lstorage1=localStorage.getItem("name");
// console.log(lstorage1);

// //to remove perticular value
// let lstorage2=localStorage.removeItem("id")

// //to clear the entire data
// let lstorage3=localStorage.clear();

// //to store the data in session storage
// let lstorage4=sessionStorage.setItem("ïd",200)
// let lstorage40=sessionStorage.setItem("name","manoj");
// console.log(lstorage4,lstorage40);


// //to get the data
// let lstorage5=sessionStorage.getItem("name");
// console.log(lstorage5);

//how to set the cookies
// document.cookie="name=manasa";
//way to access
console.log(document.cookie="name=manasa");


//promise

let promise=new Promise((resolve,reject)=>{
    let a=1+5;
    if(a==2){
        resolve("promise is fullfilled")
    }
    else{
        reject("promise is rejected")
    }
})
promise.then((success)=>{
    console.log(success);
}).catch((error)=>{
    console.log(error);
})