const data =[
    {
        id :1,
        name:"Hit",
        age : 30,  
    },
    {
        id :2,
        name:"Prit",
        age : 21,  
    },
    {
        id :3,
        name:"Himanshu",
        age : 40,  
    },
    {
        id :4,
        name:"Vasu",
        age : 25,  
    },
    {
        id :5,
        name:"Meet",
        age : 20,  
    },
    {
        id :6,
        name:"Arpit",
        age : 19,  
    }
]

localStorage.setItem("data",JSON.stringify(data))
sessionStorage.setItem("data",JSON.stringify(data))

function getdata(){

    //use local storage get data
    let local_data = JSON.parse(localStorage.getItem("data"))

    //use session storage get data
    let session_data = JSON.parse(sessionStorage.getItem("data"))
    
    let tbl = ''
    local_data.map((value) => {
        tbl += `<tr>
            <td>${value.id}</td>
            <td>${value.name}</td>
            <td>${value.age}</td>
        </tr>`
    })

    document.getElementById("tbody").innerHTML = tbl;
}

function Removedata(){
    document.getElementById("tbody").innerHTML ="";
}