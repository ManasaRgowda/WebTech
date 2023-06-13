console.log(window);

alert("hii");
window.alert("hellooo");

var a=20;
console.log(window.a);

let b=30;
console.log(window.b);

const c=40;
console.log(window.c);


//location
console.log(location);
//location.href="https://www.zee5.com/"
//location.hostname;

//history
// history.back();
// history.forward();

//screen
//screen.width
//scree.height

//navigator
//navigator.cookieEnabled
//navigator.appVersion
//navigator.product
//navigator.language
//navigator.onLine

//by using setTimeout we can make it asynchronous

// setTimeout(()=>{
//     console.log("first one");
// },3000);

// setTimeout(()=>{
//     console.log("second one");
// },12222);

// setTimeout(()=>{
//     console.log("third one");
// },1000);

setInterval(() => {
    console.log("hiiiiiiiiii");
}, 2000);