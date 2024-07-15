console.log("1 :");
console.log("asynchronous task is run till error is coming");

//Asynchronous JavaScript

console.log("first");
console.log("second");
setTimeout(()=>{
    console.log("inside the settimeout");
})
console.log("fourth");
console.log("fifth");