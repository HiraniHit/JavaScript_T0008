async function getData(){
    await fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => localStorage.setItem("table-data",JSON.stringify(data)))
}
getData()

function showData(){
    let data = JSON.parse(localStorage.getItem("table-data"))
    console.log(data);
    let tbody = document.querySelector("#tbody")
    tbody = ''
    data.map((value)=>{
        tbody += `<tr>
        <td>${value.id}</td>
        <td>${value.name}</td>
        <td>${value.email}</td>
        <td>${value.address.city}</td>
        <td>${value.phone}</td>
        </tr>`
    })
    document.getElementById("tbody").innerHTML = tbody
}
showData()

function searchByName(){
    let inputData = document.querySelector("#search")
    let searchName = inputData.value.trim()
    console.log(searchName);

    let data = JSON.parse(localStorage.getItem("table-data"))
    console.log(data);
    let tbody = document.querySelector("#tbody")
    tbody = ''
    data.map((value)=>{
        if(value.name.includes(searchName)){
            tbody += `<tr>
        <td>${value.id}</td>
        <td>${value.name}</td>
        <td>${value.email}</td>
        <td>${value.address.city}</td>
        <td>${value.phone}</td>
        </tr>`
        }
    })
    document.getElementById("tbody").innerHTML = tbody
}