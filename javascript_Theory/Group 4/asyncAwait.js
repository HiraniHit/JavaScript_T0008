console.log("3");

console.log("waiting untill that task is not complited");


//-------------- task -1 -----------------------

let task = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove("ex : 1 : Thanks for Waiting");
    },2000)
})
let task1 = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove("ex : 1 : Thanks for Waiting again");
    },4000)
})

async function outPut(){
    let result = await task;
    console.log(result);
    let result2 = await task1;
    console.log(result2);
}
outPut()


//-------------- task 2 -------------------

let task2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("ex : 2 : hello");
    },6000)
})
async function outPut2(){
    let result3 = await task2;
    console.log(result3)
    console.log("ex : 2 :hello");;
}
outPut2()