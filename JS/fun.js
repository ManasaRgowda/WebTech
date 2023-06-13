// higher order function

function hof(p,q,test)
{
    let y=test(p,q);
    console.log(y);
}
hof(10,20,add)
hof(40,20,sub)
hof(10,20,mul)
hof(40,20,div)

function add(p,q)
{
    return p+q;
}
function sub(p,q)
{
    return p-q;
}
function mul(p,q)
{
    return p*q;
}
function div(p,q)
{
    return p/q;
}


// callback function
function test()
{
    console.log("pmc");
}
function demo(){
    console.log("idfc");
}
demo(test())

function demo1(name,callback)
 {
    callback()
    console.log("hi students"+name);
}
function test1()
{
    console.log("bye students");
}
demo1("how are you",test1)