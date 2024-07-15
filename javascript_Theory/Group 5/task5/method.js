function darkmode(){
    let body = document.body
    body.classList.toggle("dark-theme")
}

function task2(){
    let h1 = document.querySelector("h1")
    h1.style.color = "blue"
    
    let p = document.querySelector("p")
    p.style.color = "lightblue"

    let div = document.createElement("div")
    div.setAttribute("class","div-info")
    div.style.backgroundColor = "lightgray"
    div.innerText = "Hello..i am hit. inside Task 2"
    div.innerHTML = `<h2> hello </h2>`

    document.body.appendChild(div)
}