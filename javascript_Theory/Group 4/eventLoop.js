console.log("5");

console.log(" i the event loop we have many stages");
console.log("web apis , call stack and callback queue");

console.log("code is running line by line");


function eventLoop(){
    console.log("ex-eventLoop :hello world"); // first call
    setTimeout(()=>{
        console.log("ex-eventLoop :timer"); //going in web api and wait 5 sec after going in call stack
    },2000)
    console.log("ex-eventLoop :how are you ?"); //second call
}
eventLoop()