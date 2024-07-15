console.log("2");

console.log("promies have a three stage");
console.log( "1. pending");
console.log( "2. fulfilled");
console.log( "3. rejected");

//example of promies

const promies = new Promise((reslove,reject)=>{

    if(Math.random() * 4 > 3){
        reslove("Yuppp!!!..sucessfully reslove")
    }
    reject("opps!!..somthing goes wrong")

}).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.error(error);
})



